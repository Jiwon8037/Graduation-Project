import React from 'react';
import PublicPage from '../pages/PublicPage';
import {setOthersPlan} from '../modules/othersPlanList';
import { connect } from 'react-redux';

const PublicPageContainer = ({setOthersPlan,othersPlans,loginState,userId}) => {
    return (
        <div>
            <PublicPage setOthersPlan={setOthersPlan} othersPlans={othersPlans} loginState={loginState} userId={userId}/>
        </div>
    );
};

export default connect(
    (state)=>({
        othersPlans:state.othersPlanList.othersPlans
    }),
    {
        setOthersPlan,
    }
)
(PublicPageContainer);