import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CheckedItems from './CheckedItems';
import { useNavigate } from 'react-router-dom';

const MakePlan = ({placeData,content}) => {
    const navigate=useNavigate();

    const makePlansPlaceData=[...placeData];
    const checkedList=makePlansPlaceData.filter(place=>place.checked===true);
    const [sendData,setSendData]=useState({
        public:false,
        title:'',
        checkedPlace:[]
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
        

    const onClick=()=>{
        setSendData({
            ...sendData,
            public: !sendData.public
        })
    };
    const onChange=(e)=>{
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
        share plan? : <input type='checkbox' onClick={onClick} checked={sendData.public} readOnly={true}/><br/>
        plan title : <input type='text' placeholder={content} onChange={onChange}/>
            <div style={{backgroundColor:'lightskyblue'}}>
                    {checkedList.map(checkedPlace=>(
                        <CheckedItems placeData={checkedPlace} key={checkedPlace.id}/>
                    ))}
            </div>
        </div>
    );
};

export default MakePlan;