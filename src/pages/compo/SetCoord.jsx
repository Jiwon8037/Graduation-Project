import axios from 'axios';
import React,{useState} from 'react';
import MapRander from './MapRander';
import PlaceList from './PlaceList';
import {getData,check} from '../../modules/setPlace'
import { connect } from 'react-redux';

const SetCoord = ({getData,check,places}) => {
    /*const [placeData,setPlaceData]=useState([
        {
            address_name: '',
            category_group_code: '',
            category_group_name: '',
            category_name: '',
            distance: '',
            id: '',
            phone: '',
            place_name: '',
            place_url: '',
            road_address_name: '',
            x: '126.92766444856224',
            y: '37.38030121417301',
            checked:false
          },
    ]);*/
    const [content,setContent]=useState('');
    const onChange=(event)=>{
        setContent(event.target.value);
    };

    const searchPlace=()=>{
        const contentData={keyword : content,};

        axios.post('/getData',contentData
        ).then((res)=>{
            console.log(res.data)
            getData(res.data);
        }).catch(error=>{
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