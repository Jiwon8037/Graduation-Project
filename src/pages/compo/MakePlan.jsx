import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CheckedItems from './CheckedItems';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const MakePlan = ({placeData,content}) => {
    const navigate=useNavigate();

    const makePlansPlaceData=[...placeData];
    const checkedList=makePlansPlaceData.filter(place=>place.checked===true);
    const [startDate,setStartDate]=useState(new Date());
    const [endDate,setEndDate]=useState(new Date());
    const [sendData,setSendData]=useState({
        public:false,
        title:'',
        checkedPlace:[],
        start_date: startDate,
        end_date: endDate
    });

    useEffect(()=>{
        setSendData({
            ...sendData,
            checkedPlace:[...checkedList]
        });
    },[checkedList]);

    useEffect(()=>{
        setSendData({
            ...sendData,
            title:content
        });
    },[content]);

    useEffect(()=>{
        setSendData({
            ...sendData,
            start_date:startDate,
            end_date:endDate
        });
    },[startDate,endDate]);

    const setPublic=()=>{
        setSendData({
            ...sendData,
            public: !sendData.public
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
        .then(
            navigate('/mypage',{replace:true})
        )
        .catch(error=>{
            console.log(error);
        })
    };

    return (
        <div className='checkedList' >
            <button onClick={sendCheckedList}>submit</button><br/> 
            start date : <DatePicker dateFormat='yyyy년 MM월 dd일' selected={startDate} onChange={date=>setStartDate(date)}/>
            end date: <DatePicker dateFormat='yyyy년 MM월 dd일' selected={endDate} onChange={date=>setEndDate(date)}/>
            share plan? : <input type='checkbox' onClick={setPublic} checked={sendData.public} readOnly={true}/><br/>
            plan title : <input type='text' placeholder={content} onChange={setTitle}/>
            <div style={{backgroundColor:'lightskyblue'}}>
                {checkedList.map(checkedPlace=>(
                    <CheckedItems placeData={checkedPlace} key={checkedPlace.id}/>
                ))}
            </div>
        </div>
    );
};

export default MakePlan;