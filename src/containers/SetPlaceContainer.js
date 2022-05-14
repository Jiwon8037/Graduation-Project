import React from 'react';
import { connect } from 'react-redux';
import SetCoord from '../pages/compo/SetCoord';
import { getData,check } from '../modules/setPlace';


const SetPlaceContainer = ({getData,check,places}) => {
    return (
        <div>
            <SetCoord getData={getData} check={check} places={places}/>
        </div>
    );
};

export default connect(
    (state)=>({
        places:state.setPlace.places,
    }),
    {
        getData,
        check
    }
)(SetPlaceContainer);