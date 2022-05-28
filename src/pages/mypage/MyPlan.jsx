import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PlaceNameList from '../../components/PlaceNameList';
import DayParsing from '../../components/DayParsing';


const MyPlan = ({planData}) => {
    const navigate=useNavigate();
    const params=useParams();
    const planId=params.plan_id;
    const myPlaceList=[...planData.places];

    return (
        <div>
            <h2>plan: {planData.title}</h2>
            <div style={{display:'flex'}}>
                <div style={{width:'15%'}}>
                    장소 목록
                    <PlaceNameList placeData={myPlaceList}/>
                </div>
                <div style={{width:'70%'}}>
                    <DayParsing placeData={myPlaceList}/>
                </div>
            </div>
            <button onClick={()=>{navigate(`/editPlan/${planId}`)}}>일정 수정</button>
        </div>
    );
};

export default MyPlan;