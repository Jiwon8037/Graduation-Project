import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MapRander from './compo/MapRander';

const MyPage = () => {
    const [myPlaceList,setMyPlaceList]=useState([
        {
            id: '123456',
            place_name:'',
            x: '126.92766444856224',
            y: '37.38030121417301',
            checked:false
        },
    ]);

    useEffect(()=>{
    axios.get('api/mySchedule'
        ).then((res)=>{
            if(res.data!=undefined){
                setMyPlaceList(res.data)
            };
        }).catch(error=>{
            console.log(error);
        });
    },[]); 

    return (
        <div>
             <h2>my page</h2>
             <MapRander placeData={myPlaceList}/>
             {myPlaceList.map(place=>(
                 <div>{place.place_name}</div>
             ))}
        </div>
    );
};

export default MyPage;