import React from 'react';

const CheckedItems = ({placeData}) => {
    const checkedPlace={...placeData};
    const {place_name}=checkedPlace;
    return (
        <div>
            {place_name}
        </div>
    );
};

export default CheckedItems;