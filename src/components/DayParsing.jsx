import React, { useState } from 'react';
import ResultMapRander from './ResultMapRander';

const DayParsing = ({placeData,totalDays}) => {
    const mapRandersPlaceData=[...placeData];
    const DayArr=[];
    DayArr[0]=[...placeData];
    let day=totalDays;
    
    if(isNaN(day)){
        day=0;
    };

    for(let i=1; i<=day; i++){
        DayArr[i]=mapRandersPlaceData.filter(place=>place.day===i);
    };
    
    const [selectedDay,setSelectedDay]=useState(0);

    let dayPlaceList=DayArr[selectedDay];

    const selectDay=(e)=>{
        const temp=Number(e.target.value);
        setSelectedDay(temp+1);
    };
    
    return (
        <div>
            <button onClick={selectDay} value={-1} key={-1}>전체보기</button>
            {[...Array(day)].map((num,i)=>
                <button onClick={selectDay} value={i} key={i}>Day:{i+1}</button>
            )}
            <ResultMapRander placeData={dayPlaceList}/>
        </div>
    );
};

export default DayParsing;