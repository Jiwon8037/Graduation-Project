import React, { useEffect } from 'react';
const {kakao}=window;

const MapRander = ({placeData}) => {
    const mapRandersPlaceData=[...placeData];
    const checkedList=mapRandersPlaceData.filter(place=>place.checked===true);

    useEffect(()=>{
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
            mapOption = {
                center: new kakao.maps.LatLng(mapRandersPlaceData[0].y, mapRandersPlaceData[0].x), // 지도의 중심좌표
                level: 8, // 지도의 확대 레벨
            };  
        // 지도를 생성합니다    
        var map = new kakao.maps.Map(mapContainer, mapOption);
        
        for(let i=0; i<checkedList.length; i++){
            const marker = new kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: new kakao.maps.LatLng(checkedList[i].y, checkedList[i].x), // 마커를 표시할 위치
                title : checkedList[i].place_name, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다 
            })
            marker.setMap(map);
        };
    },[placeData]);

    return (
        <div>
            <div id="map" style={{width:'700px', height:'500px'}}></div>
        </div>
    );
};
export default MapRander;