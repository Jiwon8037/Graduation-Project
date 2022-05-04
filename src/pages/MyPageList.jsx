import axios from 'axios';
import { useEffect } from 'react';

const MyPageList = ({getPlanData,myPlans,loginState,userId}) => {

    useEffect(()=>{
        axios.get('api/myPageList',{params:{userId}})
        .then(res=>{
            getPlanData(res.data);
            console.log(myPlans);
        })
        .catch(error=>{
            console.log(error);
        });
    },[]); 

    return (
        <div>
            <h2>my page</h2>
            <div className='myplanlist'>
                {myPlans.map(plan=>(
                    <div>
                        {plan.plan_id} : {plan.title}   {plan.start_date}~{plan.end_date}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyPageList;