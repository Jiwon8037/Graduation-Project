import React, { useEffect } from 'react';
const {kakao}=window;

const MapRander = ({placeData}) => {
    const mapRandersPlaceData=[...placeData];
    const checkedList=mapRandersPlaceData.filter(place=>place.checked===true);

    useEffect(()=>{
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
            mapOption = {
                center: new kakao.maps.LatLng(35.95, 128.25), // 지도의 중심좌표
                level: 13, // 지도의 확대 레벨
            };  
        // 지도를 생성합니다    
        var map = new kakao.maps.Map(mapContainer, mapOption);
        var points=[];
        var bounds=new kakao.maps.LatLngBounds();// 지도를 재설정할 범위정보를 가지고 있을 LatLngBounds 객체를 생성합니다

        var marker,i;
        function setBounds(){
            // LatLngBounds 객체에 추가된 좌표들을 기준으로 지도의 범위를 재설정합니다
            // 이때 지도의 중심좌표와 레벨이 변경될 수 있습니다
            map.setBounds(bounds);
        };
        for(i=0; i<checkedList.length; i++){
            const {place_name, x, y}=checkedList[i];
            const coordinate=new kakao.maps.LatLng(y,x);

            points.push(coordinate);

            marker = new kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: new kakao.maps.LatLng(y, x), // 마커를 표시할 위치
                title : place_name, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다 
            })
            marker.setMap(map);

            bounds.extend(points[i]);// LatLngBounds 객체에 좌표를 추가합니다
            setBounds();
        };
    },[placeData]);

    return (
        <div>
            <div id="map" style={{width:'700px', height:'500px'}}></div>
        </div>
    );
};
export default MapRander;