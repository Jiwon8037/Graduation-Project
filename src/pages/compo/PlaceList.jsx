import React, { useEffect, useRef, useState } from 'react';
import PlaceItems from './PlaceItems';

const PlaceList = ({placeData}) => {

    return (
        <div>
            <div className='placeList' style={{backgroundColor:'Chartreuse'}}> 
                {placeData.map(placeData=>(
                    <PlaceItems placeData={placeData}/>
                ))}
            </div>
        </div>
    );
};

export default PlaceList;