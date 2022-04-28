import React, { useEffect, useRef, useState } from 'react';
import CheckedItems from './CheckedItems';
import PlaceItems from './PlaceItems';

const PlaceList = ({placeData,check}) => {
    const placeListsPlaceData=[...placeData];
    const checkedList=placeListsPlaceData.filter(place=>place.checked===true);

    const onClick=()=>{
        
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
                {checkedList.map(checkedPlace=>(
                    <CheckedItems placeData={checkedPlace} key={checkedPlace.id}/>
                ))}
            </div>
        </div>
    );
};

export default PlaceList;