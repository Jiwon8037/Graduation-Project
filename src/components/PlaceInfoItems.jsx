import React from 'react';
import ListItemDiv from './common/ListItemDiv';

const PlaceInfoItems = ({placeData,check}) => {
    const placeItemsPlaceData={...placeData};
    const {place_name,id,checked}=placeItemsPlaceData;

    const onClick=()=>{
        check(id);
    };

    return (
        <ListItemDiv>
            <li>
                {place_name} <input type='checkbox' onClick={onClick} checked={checked} readOnly={true}/>
            </li>
        </ListItemDiv>
    );
};

export default PlaceInfoItems;