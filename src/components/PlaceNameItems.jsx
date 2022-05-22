import React from 'react';

const PlaceNameItems = ({placeData}) => {
    const placeNameData={...placeData};
    const {place_name}=placeNameData;
    return (
        <div>
            {place_name}
        </div>
    );
};

export default PlaceNameItems;