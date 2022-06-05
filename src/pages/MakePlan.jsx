import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PlaceNameItems from '../components/PlaceNameItems';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { setUserId } from '../modules/auth';
import { useDispatch } from 'react-redux';

const MakePlan = ({placeData,content}) => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
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

    const sendCheckedList=()=>{
        axios.post('/api/makeSchedule',sendData,{withCredentials:true})
        .then((res)=>{
            if(res.data.success===true){
            navigate('/mypage',{replace:true});
            }else{
                sessionStorage.removeItem('user');
                dispatch(setUserId(sessionStorage.getItem('user')));
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
            <button onClick={sendCheckedList}>submit</button><br/> 
            start date : <DatePicker dateFormat='yyyy년 MM월 dd일' selected={startDate} onChange={date=>setStartDate(date)}/>
            end date: <DatePicker dateFormat='yyyy년 MM월 dd일' selected={endDate} onChange={date=>setEndDate(date)}/>
            share plan? : <input type='checkbox' onClick={setPublic} checked={sendData.isPublic} readOnly={true}/><br/>
            plan title : <input type='text' placeholder={content} onChange={setTitle}/>
            <div className='placeList'>
                {checkedList.map(checkedPlace=>(
                    <PlaceNameItems placeData={checkedPlace} key={checkedPlace.id}/>
                ))}
            </div>
        </div>
    );
};

export default MakePlan;