import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Pagination from '../../components/Pagination';
import PlanList from '../../components/PlanList';
import ListTemplete from '../ListTemplete';

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
        <ListTemplete>
            <h2>다른 사람들의 일정</h2>
            <PlanList pageName={'publicPlan'} planList={planList.othersPlans}/>
            <Pagination maxPage={planList.totalPage} pageName={'publicpage'} pageNum={page+1}/>
        </ListTemplete>
    );
};

export default PublicPage;