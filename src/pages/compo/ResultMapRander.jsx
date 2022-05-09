import React, { useEffect } from 'react';
const {kakao}=window;

const ResultMapRander = ({placeData}) => {
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
        var linePath=[];

        for(let i=0; i<checkedList.length; i++){
            const coordinate=new kakao.maps.LatLng(checkedList[i].y,checkedList[i].x);
            const placeName=checkedList[i].place_name;

            linePath.push(coordinate);

            const marker = new kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: coordinate, // 마커를 표시할 위치
                title : placeName, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다 
            });
            marker.setMap(map);
            
            // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
            var iwContent = `<div style="padding:5px;">${i+1} : ${placeName}<br><a href="https://map.kakao.com/link/map/${placeName},${checkedList[i].y},${checkedList[i].x}" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/${placeName},${checkedList[i].y},${checkedList[i].x}" style="color:blue" target="_blank">길찾기</a></div>`,
                iwPosition = coordinate; //인포윈도우 표시 위치입니다
            
            var infowindow = new kakao.maps.InfoWindow({
                position : iwPosition, 
                content : iwContent 
            });
            // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
            infowindow.open(map, marker);

            
        };
        
        var polyline = new kakao.maps.Polyline({
            path: linePath, // 선을 구성하는 좌표배열 입니다
            strokeWeight: 5, // 선의 두께 입니다
            strokeColor: '#f2020a', // 선의 색깔입니다
            strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
            strokeStyle: 'solid' // 선의 스타일입니다
        });
        polyline.setMap(map);

    },[placeData]);

    return (
        <div>
            <div id="map" style={{width:'700px', height:'500px'}}></div>
        </div>
    );
};
export default ResultMapRander;