import React, { useState } from 'react';
import axios from 'axios';
import CheckedItems from './CheckedItems';
import { useNavigate } from 'react-router-dom';

const MakePlan = ({placeData}) => {
    const navigate=useNavigate();

    const makePlansPlaceData=[...placeData];
    const checkedList=makePlansPlaceData.filter(place=>place.checked===true);
    const [sendData,setSendData]=useState({
        public:false,
        checkedPlace:[...checkedList]
    });

    const onClick=()=>{
        setSendData({
            ...sendData,
            public: !sendData.public
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
        <button onClick={sendCheckedList}>submit</button> 
        share plan? : <input type='checkbox' onClick={onClick} checked={sendData.public} readOnly={true}/>
            <div style={{backgroundColor:'lightskyblue'}}>
                    {checkedList.map(checkedPlace=>(
                        <CheckedItems placeData={checkedPlace} key={checkedPlace.id}/>
                    ))}
            </div>
        </div>
    );
};

export default MakePlan;