import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Pagination from './Pagination';
import PlanList from './PlanList';

const PublicPage = ({setOthersPlan,planList}) => {
    const [searchParams]=useSearchParams();
    const page=(parseInt(searchParams.get('page'))||1)-1;

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
            <PlanList pageName={'publicPlan'} planList={planList.othersPlans}/>
            <Pagination maxPage={planList.totalPage} pageName={'publicpage'} pageNum={page+1}/>
        </div>
    );
};

export default PublicPage;