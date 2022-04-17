import React from 'react';

const PlaceItems = ({placeData}) => {
    const placeItemsPlaceData={...placeData};
    const {place_name}=placeItemsPlaceData;
    return (
        <div>
            <li>
                {place_name}
            </li>
        </div>
    );
};

export default PlaceItems;