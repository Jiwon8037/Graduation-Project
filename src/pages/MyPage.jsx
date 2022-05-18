import axios from 'axios';
import { useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import Pagination from './Pagination';

const MyPage = ({getPlanData,planList,setUserId}) => {
    const navigate=useNavigate();
    const [searchParams]=useSearchParams();
    const page=(parseInt(searchParams.get('page'))||1)-1;

    useEffect(()=>{
        axios.get('/api/myPageList',{
            params:{page},
            withCredentials:true
        })
        .then(res=>{
            if(res.data.loginSuccess===true){
                getPlanData(res.data);
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
    },[page]); 
    
    return (
        <div>
            <h2>my page</h2>
            <div className='myplanlist'>
                {planList.myPlans.map(plan=>(
                    <div key={plan.plan_id}>
                        {plan.plan_id} :<Link to={`/myplan/${plan.plan_id}`}>{plan.title}</Link>  {plan.start_date}~{plan.end_date}
                    </div>
                ))}
            </div>
            <Pagination maxPage={planList.totalPage} pageName={'mypage'} pageNum={page+1}/>
        </div>
    );
};

export default MyPage;