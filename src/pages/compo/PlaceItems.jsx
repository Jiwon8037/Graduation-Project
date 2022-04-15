import React from 'react';

const PlaceItems = ({placeData}) => {
    const {place_name}=placeData;
    return (
        <div>
            <li>
                {place_name}
            </li>
        </div>
    );
};

export default PlaceItems;