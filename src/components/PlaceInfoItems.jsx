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
                <label>
                    <input type='checkbox' onClick={onClick} checked={checked} readOnly={true}/>
                    {place_name} 
                </label>
            </li>
        </ListItemDiv>
    );
};

export default PlaceInfoItems;