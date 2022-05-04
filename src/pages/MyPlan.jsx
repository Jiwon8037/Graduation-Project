import React from 'react';
import { useParams } from 'react-router-dom';
import MapRander from './compo/MapRander';

const MyPlan = ({myPlans}) => {
    const params=useParams();
    const planId=Number(params.plan_id)-1;
    const {title,places}=myPlans[planId];
    const myPlaceList=[...places];
 
    return (
        <div>
             <h2>plan: {title}</h2>
             <MapRander placeData={myPlaceList}/>
             {myPlaceList.map(place=>(
                 <div>{place.place_name}</div>
             ))}
        </div>
    );
};

export default MyPlan;