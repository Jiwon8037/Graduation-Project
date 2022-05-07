import axios from 'axios';
import React,{useState} from 'react';
import MapRander from './MapRander';
import PlaceList from './PlaceList';
import {getData,check} from '../../modules/setPlace'
import { connect } from 'react-redux';

const SetCoord = ({getData,check,places}) => {
    const [content,setContent]=useState('');
    const onChange=(event)=>{
        setContent(event.target.value);
    };

    const searchPlace=()=>{
        const contentData={keyword : content,};

        axios.post('/getData',contentData,{withCredentials:true})
        .then((res)=>{
            console.log(res.data)
            getData(res.data);
        })
        .catch(error=>{
            console.log(error);
        });
    };
 
    return (
        <div>
            <MapRander placeData={places}></MapRander>
            <div className="option">
                <input type="text" id="content" placeholder="검색 장소" onChange={onChange}/>
                <button onClick={searchPlace}>검색</button>
            </div>
            <PlaceList placeData={places} check={check}/>
        </div>
    );
};

export default connect(
    (state)=>({
        places:state.setPlace.places
    }),
    {
        getData,
        check
    }
)(SetCoord);