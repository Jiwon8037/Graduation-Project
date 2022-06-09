import React,{useState} from 'react';
import MapRander from '../components/MapRander';
import PlaceInfoList from '../components/PlaceInfoList';
import MakePlan from './MakePlan';
import MakePlanTemplete from './MakePlanTemplete';
import Button from '../components/common/Button';
import { apiSearchPlace } from '../lib/api';

const SetCoord = ({getData,check,places}) => {
    const [content,setContent]=useState('');
    const onChange=(event)=>{
        setContent(event.target.value);
    };

    const searchPlace=()=>{
        const contentData={keyword : content,};

        apiSearchPlace(contentData)
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
                <div>
                    <input className='searchInput' type="text" id="content" placeholder="장소를 입력하세요." onChange={onChange}/>
                    <Button className='searchBtn' onClick={searchPlace} >검색</Button>        
                </div>
                <div className='clear'></div>
                <div className='placeListDiv'>
                    장소 목록
                    <PlaceInfoList placeData={places} check={check} />
                </div>
            </div>
            <div className="mapRander">
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