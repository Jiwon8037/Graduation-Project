import axios from 'axios';
import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Pagination from './Pagination';

const MyPage = ({getPlanData,planList,loginState,userId}) => {
    const [searchParams]=useSearchParams();
    const page=parseInt(searchParams.get('page'))||1;

    useEffect(()=>{
        axios.get('/api/myPageList',{
            params:{page},
            withCredentials:true
        })
        .then(res=>{
            getPlanData(res.data);
        })
        .catch(error=>{
            console.log(error);
        });
    },[page]); 
    
    return (
        <div>
            <h2>my page</h2>
            <div className='myplanlist'>
                {planList.myPlans.map(plan=>(
                    <div>
                        {plan.plan_id} :<Link to={`/myplan/${plan.plan_id}`}>{plan.title}</Link>  {plan.start_date}~{plan.end_date}
                    </div>
                ))}
            </div>
            <Pagination pageNum={planList.Totalpage} page={'mypage'}/>
        </div>
    );
};

export default MyPage;