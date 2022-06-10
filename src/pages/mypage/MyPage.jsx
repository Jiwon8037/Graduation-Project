import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Pagination from '../../components/Pagination';
import PlanList from '../../components/PlanList';
import { apiGetMyPageList } from '../../lib/api';
import PlanListTemplete from '../PlanListTemplete';

const MyPage = ({getPlanData,planList,setUserId}) => {
    const navigate=useNavigate();
    const [searchParams]=useSearchParams();
    const page=(parseInt(searchParams.get('page'))||1)-1;

    useEffect(()=>{
        apiGetMyPageList(page)
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
        <PlanListTemplete>
            <h2>마이 페이지</h2>
            <PlanList pageName={'myPlan'} planList={planList.myPlans}/>
            <Pagination maxPage={planList.totalPage} pageName={'mypage'} pageNum={page+1}/>
        </PlanListTemplete>
    );
};

export default MyPage;