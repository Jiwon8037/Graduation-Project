import React, { useEffect } from 'react';
const {kakao}=window;

const MapRander = ({x,y}) => {

    useEffect(()=>{
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
            mapOption = {
                center: new kakao.maps.LatLng(y, x), // 지도의 중심좌표
                level: 3, // 지도의 확대 레벨
            };  
        // 지도를 생성합니다    
        var map = new kakao.maps.Map(mapContainer, mapOption);
    },[x,y]);

    return (
        <div>
            <div id="map" style={{width:'600px', height:'600px'}}></div>
        </div>
    );
};

export default MapRander;