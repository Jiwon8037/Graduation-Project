import React from 'react';
import MyPage from '../pages/mypage/MyPage';
import { getPlanData } from '../modules/myPlanList';
import { connect } from 'react-redux';

const MyPageContainer = ({getPlanData,planList,setUserId}) => {
    return (
        <div>
            <MyPage getPlanData={getPlanData} planList={planList} setUserId={setUserId}/>
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