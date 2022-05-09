import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ResultMapRander from './compo/ResultMapRander';

const MyPlan = ({userId}) => {
    const params=useParams();
    const planId=params.plan_id;
    const [plan,setPlan]=useState({
        title:'',
        places:[
            {
                id: '',
                place_name: '대부도',
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
            params:{userId,planId},
            withCredentials:true
        })
        .then(res=>{
            setPlan(res.data);
        })
        .catch(error=>{
            console.log(error);
        });
    },[]); 

    return (
        <div>
             <h2>plan: {plan.title}</h2>
             <ResultMapRander placeData={myPlaceList}/>
             {myPlaceList.map(place=>(
                 <div>{place.place_name}</div>
             ))}
        </div>
    );
};

export default MyPlan;