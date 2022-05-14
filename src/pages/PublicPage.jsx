import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Pagination from './Pagination';

const PublicPage = ({setOthersPlan,planList}) => {
    const [searchParams]=useSearchParams();
    const page=parseInt(searchParams.get('page'))||1;

    useEffect(()=>{
        axios.get('/api/publicPageList',{
            params:{page},
            withCredentials:true
        })
        .then(res=>{
            setOthersPlan(res.data);
        })
        .catch(error=>{
            console.log(error);
        });
    },[page]); 

    return (
        <div>
            <h2>oters plan</h2>
            <div className='othersplanlist'>
                {planList.othersPlans.map(plan=>(
                    <div>
                        {plan.plan_id} :<Link to={`/publicplan/${plan.plan_id}`}>{plan.title}</Link>  {plan.start_date}~{plan.end_date}
                    </div>
                ))}
            </div>
            <Pagination pageNum={planList.Totalpage} page={'publicpage'}/>
        </div>
    );
};

export default PublicPage;