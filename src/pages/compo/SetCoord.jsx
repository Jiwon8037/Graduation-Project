import axios from 'axios';
import React,{useState} from 'react';
import MapRander from './MapRander';
import PlaceList from './PlaceList';

const SetCoord = () => {
    const [placeData,setPlaceData]=useState([
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
          },
    ]);
    const [content,setContent]=useState('');
    const onChange=(event)=>{
        setContent(event.target.value);
        //console.log(content);
    };

    const searchPlace=()=>{
        const contentData={keyword : content,};

        axios.post('/getData',contentData
        ).then((res)=>{
            //console.log(res.data)
            setPlaceData(res.data);
        }).catch(error=>{
            console.log(error);
        });
    };

    return (
        <div>
            <MapRander placeData={placeData}></MapRander>
            <div className="option">
                <input type="text" id="content" placeholder="검색 장소" onChange={onChange}/>
                <button onClick={searchPlace}>검색</button>
            </div>
            <PlaceList placeData={placeData}/>
        </div>
    );
};

export default SetCoord;