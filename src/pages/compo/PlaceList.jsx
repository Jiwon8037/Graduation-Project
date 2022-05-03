import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import CheckedItems from './CheckedItems';
import PlaceItems from './PlaceItems';

const PlaceList = ({placeData,check}) => {
    const placeListsPlaceData=[...placeData];
    const checkedList=placeListsPlaceData.filter(place=>place.checked===true);

    const sendCheckedList=()=>{
        const sendData={
            data:checkedList
        };

        axios.post('/api/makeSchedule',checkedList
        ).then(
            console.log('success')
        ).catch(error=>{
            console.log(error);
        })
    }
    return (
        <div>
            <div className='placeList' style={{backgroundColor:'Chartreuse'}}> 
                {placeListsPlaceData.map(place=>(
                    <PlaceItems placeData={place} key={place.id} check={check}/>
                ))}
            </div>
            <hr/>
            <div className='checkedList' style={{backgroundColor:'lightskyblue'}}>
                <button onClick={sendCheckedList}>submit</button>
                {checkedList.map(checkedPlace=>(
                    <CheckedItems placeData={checkedPlace} key={checkedPlace.id}/>
                ))}
            </div>
        </div>
    );
};

export default PlaceList;