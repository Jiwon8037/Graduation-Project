import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import ResultMapRander from './compo/ResultMapRander';
import PlaceNameList from './compo/PlaceNameList';


const MyPlan = ({setUserId}) => {
    const navigate=useNavigate();
    const params=useParams();
    const planId=params.plan_id;
    const [plan,setPlan]=useState({
        title:'',
        places:[
            {
                id: '',
                place_name: '',
                x: '0',
                y: '0',
                checked:true,
                day:''
            }
        ]}
    );
    const myPlaceList=[...plan.places];

    useEffect(()=>{
        axios.get('/api/myPlan',{
            params:{planId},
            withCredentials:true
        })
        .then(res=>{
            if(res.data.loginSuccess===true){
                setPlan(res.data);
            }else{
                sessionStorage.removeItem('user');
                setUserId(sessionStorage.getItem('user'));
                alert('로그인 후 이용해주세요');
                navigate('/login',{replace:true});
            }
        })
        .catch(error=>{
            console.log(error);
        });
    },[]); 

    return (
        <div>
            <h2>plan: {plan.title}</h2>
            <div style={{display:'flex'}}>
                <div style={{width:'15%'}}>
                    장소 목록
                    <PlaceNameList placeData={myPlaceList}/>
                </div>
                <div style={{width:'70%'}}>
                    <ResultMapRander placeData={myPlaceList}/>
                </div>
            </div>
            <button onClick={()=>{navigate(`/editPlan/${planId}`)}}>일정 수정</button>
        </div>
    );
};

export default MyPlan;