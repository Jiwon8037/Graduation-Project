import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PlaceNameList from '../../components/PlaceNameList';
import DayParsing from '../../components/DayParsing';
import PostTemplete from '../PostTemplete';

const MyPlan = ({planData}) => {
    const navigate=useNavigate();
    const params=useParams();
    const planId=params.plan_id;
    const myPlaceList=[...planData.places];

    return (
        <PostTemplete>
            <h2>{planData.title}</h2>
            <div className='post'>
                <div className='placeNameList'>
                    <h3>장소 목록</h3>
                    <PlaceNameList placeData={myPlaceList}/>
                </div>
                <div className='mapRander'>
                    <DayParsing placeData={myPlaceList} totalDays={planData.total_days}/>

                </div>
            </div>
            <button onClick={()=>{navigate(`/editPlan/${planId}`)}}>일정 수정</button>
        </PostTemplete>
    );
};

export default MyPlan;