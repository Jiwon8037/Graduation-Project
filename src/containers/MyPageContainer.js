import React from 'react';
import MyPageList from '../pages/MyPage';
import { getPlanData } from '../modules/myPlanList';
import { connect } from 'react-redux';

const MyPageContainer = ({getPlanData,myPlans,loginState,userId}) => {
    return (
        <div>
            <MyPageList getPlanData={getPlanData} myPlans={myPlans} loginState={loginState} userId={userId}/>
        </div>
    );
};

export default connect(
    (state)=>({
        myPlans:state.myPlanList.myPlans
    }),
    {
        getPlanData,
    }
)(MyPageContainer);