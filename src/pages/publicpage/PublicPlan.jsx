import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PlaceNameList from '../../components/PlaceNameList';
import PostTemplete from '../PostTemplete';
import DayParsing from '../../components/DayParsing';
import Button from '../../components/common/Button';

const PublicPlan = ({userId}) => {
    const params=useParams();
    const planId=params.plan_id;
    const [plan,setPlan]=useState({
        title:'',
        places:[
            {
                id: '',
                place_name: '',
                x: '0',
                y: '0',
                checked:true,
                day:''
            }
        ]}
    );
    const myPlaceList=[...plan.places];

    useEffect(()=>{
        axios.get('/api/publicPlan',{
            params:{planId},
            withCredentials:true
        })
        .then(res=>{
            setPlan(res.data);
        })
        .catch(error=>{
            console.log(error);
        });
    },[]);
    
    const onClickLiked=()=>{
        axios.get('/api/publicPlan/liked',{withCredentials:true})
        .then(res=>{
            if(res.data==='login'){
                alert('로그인 후 이용 해 주세요.');
            }else if(res.data==='overlap'){
                alert('이미 좋아요기능을 사용 했습니다.');
            };
        })
        .catch(err=>{
            console.log(err);
        });
    };
    
    const onClickCopy=()=>{
        axios.get('/api/publicPlan/copy',{withCredentials:true})
        .then(res=>{
            if(res.data==='login'){
                alert('로그인 후 이용 해 주세요.');
            }else if(res.data==='overlap'){
                alert('이미 가져온 일정입니다.');
            }else{
                alert('내 일정으로 가져왔습니다.');
            };
        })
        .catch(err=>{
            console.log(err);
        });
    };

    return (
        <PostTemplete>
            <h2>{plan.title}</h2>
            <div className='post'>
                <div className='placeNameList'>
                    <h3>장소 목록</h3>
                    <PlaceNameList placeData={myPlaceList}/>
                </div>
                <div className='mapRander'>
                    <DayParsing placeData={myPlaceList}/>
                </div>
                <div className='liked'>
                    좋아요: {plan.liked}<br/>
                    {(userId===plan.userId) || (
                        <>
                            <Button onClick={onClickLiked}>좋아요</Button>
                            <Button onClick={onClickCopy}>일정복사</Button>
                        </>
                    )}
                </div>
            </div>
        </PostTemplete>
    );
};

export default PublicPlan;