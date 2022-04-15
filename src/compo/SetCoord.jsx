import axios from 'axios';
import React,{useState} from 'react';
import MapRander from './MapRander';

const SetCoord = () => {
    const [coords,setCoords]=useState({
        x: 126.92766444856224,
        y: 37.38030121417301,
        placename:''
    });
    
    const [content,setContent]=useState('');

    const onChange=(event)=>{
        setContent(event.target.value);
        console.log(content);
    }

    const searchPlace=()=>{
        const contentData={
            keyword:content,
        }
        console.log(contentData)

        axios.post('/test',contentData
        ).then(res=>{
            setCoords({
                x:res.data.x,
                y:res.data.y,
                placename:res.data.place_name,
            })
        }).catch(error=>{
            console.log(error)
        })
        setContent('');
    }

    return (
        <div className='compo1'>
            <MapRander x={coords.x} y={coords.y}></MapRander>
            <div className="option">
                <input type="text" id="content" placeholder="검색 장소" onChange={onChange}/>
                <button onClick={searchPlace}>검색</button>
            </div>
        </div>
    );
};

export default SetCoord;