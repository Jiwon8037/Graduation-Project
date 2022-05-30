import React from 'react';
import PlaceNameItems from './PlaceNameItems';

const PlaceNameList = ({placeData}) => {
    const placeNameListsData=[...placeData];

    return (
        <div className='placeList'>
            {placeNameListsData.map(place=>(
                <PlaceNameItems placeData={place} key={place.id}/>
            ))}
        </div>
    );
};

export default PlaceNameList;