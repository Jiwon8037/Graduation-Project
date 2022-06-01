import axios from 'axios';
import React,{useState} from 'react';
import MapRander from '../components/MapRander';
import PlaceInfoList from '../components/PlaceInfoList';
import MakePlan from './MakePlan';
import MakePlanTemplete from './MakePlanTemplete';

const SetCoord = ({getData,check,places}) => {
    const [content,setContent]=useState('');
    const onChange=(event)=>{
        setContent(event.target.value);
    };

    const searchPlace=()=>{
        const contentData={keyword : content,};

        axios.post('/getData',contentData,{withCredentials:true})
        .then((res)=>{
            getData(res.data);
        })
        .catch(error=>{
            console.log(error);
        });
    };
 
    return (
        <MakePlanTemplete>
        <div className='makePlanPage'>
            <div className='placeInfoList'>
                장소 목록
                <PlaceInfoList placeData={places} check={check} />
            </div>
            <div className="mapRander">
                <input type="text" id="content" placeholder="검색 장소" onChange={onChange}/>
                <button onClick={searchPlace}>검색</button>
                <MapRander placeData={places}></MapRander>
            </div>
            <div className='makePlanData'>
                <MakePlan placeData={places} content={content}/>
            </div>
        </div>
        </MakePlanTemplete>
    );
};

export default SetCoord;