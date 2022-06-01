import PlaceInfoItems from './PlaceInfoItems';

const PlaceInfoList = ({placeData,check}) => {
    const placeListsPlaceData=[...placeData];

    return (
        <div>
            <div className='placeList'> 
                {placeListsPlaceData.map(place=>(
                    <PlaceInfoItems placeData={place} key={place.id} check={check}/>
                ))}
            </div>
        </div>
    );
};

export default PlaceInfoList;