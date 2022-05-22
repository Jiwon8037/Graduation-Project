import React, { useCallback, useState } from 'react';
import update from 'immutability-helper';
import DndPlace from './DndPlace';
import ResultMapRander from '../../components/ResultMapRander';

const PlanEdit = ({setUserId,planData}) => {
    const [placeList,setPlaceList]=useState([...planData.places]);
    const movePlace=useCallback((dragIndex,hoverIndex)=>{
        setPlaceList((prevPlaceList)=>
            update(prevPlaceList,{
                $splice:[
                    [dragIndex,1],
                    [hoverIndex,0,prevPlaceList[dragIndex]]
                ],
            }),
        )
    },[]);
    return(
        <div>
            <h2>제목 : {planData.title}</h2>
            <div style={{display:'flex'}}>
                <div style={{width:'20%'}}>
                    {placeList.map((place,i)=>(
                        <DndPlace
                            key={place.id} 
                            index={i} 
                            id={place.id} 
                            text={place.place_name}
                            movePlace={movePlace}
                        />
                    ))}
                </div>
                <div style={{width:'80%'}}>
                    <ResultMapRander placeData={placeList}/>
                </div>
            </div>
        </div>
    )
};

export default PlanEdit;