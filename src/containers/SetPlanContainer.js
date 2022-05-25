import React, {useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { setPlanData,removePlanPlace } from '../modules/setPlan';
import axios from 'axios';

const SetPlanContainer = ({setPlanData,removePlanPlace,planData,setUserId,ComponentName}) => {
    const navigate=useNavigate();
    const params=useParams();
    const planId=params.plan_id;
    useEffect(()=>{
        axios.get('/api/myPlan',{
            params:{planId},
            withCredentials:true
        })
        .then(res=>{
            if(res.data.loginSuccess===true){
                setPlanData(res.data);
            }else{
                sessionStorage.removeItem('user');
                setUserId(sessionStorage.getItem('user'));
                alert('로그인 후 이용해주세요');
                navigate('/login',{replace:true});
            }
        })
        .catch(error=>{
            console.log(error);
        });
    },[]);

    return (
        <div>
            <ComponentName setUserId={setUserId}  planData={planData} removePlanPlace={removePlanPlace}/>
        </div>
    );
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