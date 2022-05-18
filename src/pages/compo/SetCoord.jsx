import axios from 'axios';
import React,{useState} from 'react';
import MapRander from './MapRander';
import PlaceList from './PlaceList';
import MakePlan from './MakePlan';

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
        <div style={{display:'flex'}}>
            <div style={{width:'20%'}}>
                장소 목록
                <PlaceList placeData={places} check={check} />
            </div>
            <div className="option" style={{width:'60%'}}>
                <input type="text" id="content" placeholder="검색 장소" onChange={onChange}/>
                <button onClick={searchPlace}>검색</button>
                <MapRander placeData={places}></MapRander>
            </div>
            <div style={{width:'20%'}}>
                <MakePlan placeData={places} content={content}/>
            </div>
        </div>
    );
};

export default SetCoord;