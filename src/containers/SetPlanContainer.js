import React, {useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { setPlanData,removePlanPlace } from '../modules/setPlan';
import MyPlan from '../pages/mypage/MyPlan';
import DndContainer from './DndContainer';

const SetPlanContainer = ({setPlanData,removePlanPlace,planData,setUserId,componentName}) => {
    const navigate=useNavigate();
    const params=useParams();
    const planId=params.plan_id;
    useEffect(()=>{
        setPlanData(planId)
        if(planData.loginSuccess===true){
            setPlanData(planData.data);
        }else{
            sessionStorage.removeItem('user');
            setUserId(sessionStorage.getItem('user'));
            alert('로그인 후 이용해주세요');
            navigate('/login',{replace:true});
        }
    },[]);

    if(componentName==='MyPlan'){
        return(
            <MyPlan setUserId={setUserId}  planData={planData} removePlanPlace={removePlanPlace}/>
        )
    }else{
        return(
            <DndContainer setUserId={setUserId}  planData={planData} removePlanPlace={removePlanPlace}/>
        )
    }
}
export default connect(
    (state)=>({
        planData:state.setPlan.planData,
    }),
    {
        setPlanData,
        removePlanPlace,
    }
)(SetPlanContainer);