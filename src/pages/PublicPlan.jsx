import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ResultMapRander from './compo/ResultMapRander';
import PlaceNameList from './compo/PlaceNameList';

const PublicPlan = ({userId}) => {
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
        axios.get('/api/publicPlan',{
            params:{planId},
            withCredentials:true
        })
        .then(res=>{
            setPlan(res.data);
        })
        .catch(error=>{
            console.log(error);
        });
    },[]);
    
    const onClickLiked=()=>{
        axios.get('/api/publicPlan/liked',{withCredentials:true})
        .then(res=>{
            if(res.data==='login'){
                alert('로그인 후 이용 해 주세요.');
            }else if(res.data==='overlap'){
                alert('이미 좋아요기능을 사용 했습니다.');
            };
        })
        .catch(err=>{
            console.log(err);
        });
    };
    
    const onClickCopy=()=>{
        axios.get('/api/publicPlan/copy',{withCredentials:true})
        .then(res=>{
            if(res.data==='login'){
                alert('로그인 후 이용 해 주세요.');
            }else if(res.data==='overlap'){
                alert('이미 가져온 일정입니다.');
            }else{
                alert('내 일정으로 가져왔습니다.');
            };
        })
        .catch(err=>{
            console.log(err);
        });
    };

    return (
        <div style={{display:'flex'}}>
            <div style={{width:'15%'}}>
                <h2>plan: {plan.title}</h2>
                <PlaceNameList placeData={myPlaceList}/>
            </div>
            <div style={{width:'75%'}}>
                <ResultMapRander placeData={myPlaceList}/>
            </div>
            <div style={{width:'10%'}}>
                좋아요 수: {plan.liked + ' '}
                {(userId===plan.userId) ? (
                    <div></div>
                ) : (
                    <div>
                        <button onClick={onClickLiked}>좋아요</button>
                        <button onClick={onClickCopy}>내 일정으로 가져오기</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PublicPlan;