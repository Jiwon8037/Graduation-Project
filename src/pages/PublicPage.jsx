import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PublicPage = ({setOthersPlan,othersPlans}) => {

    useEffect(()=>{
        axios.get('/api/publicPageList',{withCredentials:true})
        .then(res=>{
            setOthersPlan(res.data);
        })
        .catch(error=>{
            console.log(error);
        });
    },[]); 

    return (
        <div>
            <h2>oters plan</h2>
            <div className='othersplanlist'>
                {othersPlans.map(plan=>(
                    <div>
                        {plan.plan_id} :<Link to={`/publicplan/${plan.plan_id}`}>{plan.title}</Link>  {plan.start_date}~{plan.end_date}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PublicPage;