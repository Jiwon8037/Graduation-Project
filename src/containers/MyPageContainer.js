import React from 'react';
import MyPageList from '../pages/MyPage';
import { getPlanData } from '../modules/myPlanList';
import { connect } from 'react-redux';

const MyPageContainer = ({getPlanData,planList,setUserId}) => {
    return (
        <div>
            <MyPageList getPlanData={getPlanData} planList={planList} setUserId={setUserId}/>
        </div>
    );
};

export default connect(
    (state)=>({
        planList:state.myPlanList.planList
    }),
    {
        getPlanData,
    }
)(MyPageContainer);