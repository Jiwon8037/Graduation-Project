import React, { useEffect, useRef, useState } from 'react';
import PlaceItems from './PlaceItems';

const PlaceList = ({placeData}) => {
    const placeListsPlaceData=[...placeData];
    return (
        <div>
            <div className='placeList' style={{backgroundColor:'Chartreuse'}}> 
                {placeListsPlaceData.map(placeListsPlaceData=>(
                    <PlaceItems placeData={placeListsPlaceData}/>
                ))}
            </div>
        </div>
    );
};

export default PlaceList;