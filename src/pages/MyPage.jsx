import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const MyPage = ({getPlanData,myPlans,loginState,userId}) => {

    useEffect(()=>{
        axios.get('/api/myPageList',{params:{userId}})
        .then(res=>{
            getPlanData(res.data);
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
                        {plan.plan_id} :<Link to={`/myplan/${plan.plan_id}`}>{plan.title}</Link>  {plan.start_date}~{plan.end_date}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyPage;