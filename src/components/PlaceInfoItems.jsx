import React from 'react';

const PlaceInfoItems = ({placeData,check}) => {
    const placeItemsPlaceData={...placeData};
    const {place_name,id,checked}=placeItemsPlaceData;

    const onClick=()=>{
        check(id);
    };

    return (
        <div>
            <li>
                {place_name} <input type='checkbox' onClick={onClick} checked={checked} readOnly={true}/>
            </li>
        </div>
    );
};

export default PlaceInfoItems;