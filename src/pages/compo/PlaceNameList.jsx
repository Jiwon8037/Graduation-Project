import React from 'react';
import CheckedItems from './PlaceNameItems';

const PlaceNameList = ({placeData}) => {
    const placeNameListsData=[...placeData];

    return (
        <div>
            {placeNameListsData.map(place=>(
                <CheckedItems placeData={place} key={place.id}/>
            ))}
        </div>
    );
};

export default PlaceNameList;