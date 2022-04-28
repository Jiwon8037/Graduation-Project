import React from 'react';

const PlaceItems = ({placeData,check}) => {
    const placeItemsPlaceData={...placeData};
    const {place_name,id,checked}=placeItemsPlaceData;
    console.log(placeItemsPlaceData)
    const onClick=()=>{
        console.log(id);
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

export default PlaceItems;