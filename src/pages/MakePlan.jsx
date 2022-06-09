import React, { useEffect, useState } from 'react';
import PlaceNameItems from '../components/PlaceNameItems';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { connect } from 'react-redux';
import { setUserId } from '../modules/auth';
import Button from '../components/common/Button';
import { apiMakePlan } from '../lib/api';

const MakePlan = ({placeData,content,setUserId}) => {
    const navigate=useNavigate();

    const makePlansPlaceData=[...placeData];
    const checkedList=makePlansPlaceData.filter(place=>place.checked===true);
    const [startDate,setStartDate]=useState(new Date());
    const [endDate,setEndDate]=useState(new Date());
    const [sendData,setSendData]=useState({
        isPublic:false,
        title:'',
        checkedPlace:[],
        start_date: startDate,
        end_date: endDate
    });

    useEffect(()=>{
        setSendData({
            ...sendData,
            checkedPlace:[...checkedList],
            start_date:startDate,
            end_date:endDate
        });
    },[checkedList,startDate,endDate]);

    useEffect(()=>{
        setSendData({
        ...sendData,
        title:content,
        });
    },[content]);

    const setPublic=()=>{
        setSendData({
            ...sendData,
            isPublic: !sendData.isPublic
        })
    };
    const setTitle=(e)=>{
        setSendData({
            ...sendData,
            title:e.target.value,
        })
    };

    const sendPlan=()=>{
        apiMakePlan(sendData)
        .then((res)=>{
            if(res.data.success===true){
            navigate('/mypage',{replace:true});
            }else{
                sessionStorage.removeItem('user');
                setUserId(sessionStorage.getItem('user'));
                alert('로그인 후 이용해주세요');
                navigate('/login',{replace:true});
            }
        })
        .catch(error=>{
            console.log(error);
        })
    };

    return (
        <div className='checkedList' >
            <Button onClick={sendPlan}>만들기</Button><br/>
            여행 시작 일 : <DatePicker dateFormat='yyyy년 MM월 dd일' selected={startDate} onChange={date=>setStartDate(date)}/>
            여행 종료 일: <DatePicker dateFormat='yyyy년 MM월 dd일' selected={endDate} onChange={date=>setEndDate(date)}/>
            공유 여부 : <input type='checkbox' onClick={setPublic} checked={sendData.isPublic} readOnly={true}/><br/>
            여행 이름 : <input type='text' placeholder={content} onChange={setTitle}/><br/>
            <div className='placeList'>
                {checkedList.map(checkedPlace=>(
                    <PlaceNameItems placeData={checkedPlace} key={checkedPlace.id}/>
                ))}
            </div>
        </div>
    );
};

export default connect(()=>({}),{setUserId})(MakePlan);