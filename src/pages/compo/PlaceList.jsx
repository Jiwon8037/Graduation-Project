import PlaceItems from './PlaceItems';

const PlaceList = ({placeData,check}) => {
    const placeListsPlaceData=[...placeData];

    return (
        <div>
            <div className='placeList' style={{backgroundColor:'Chartreuse'}}> 
                {placeListsPlaceData.map(place=>(
                    <PlaceItems placeData={place} key={place.id} check={check}/>
                ))}
            </div>
        </div>
    );
};

export default PlaceList;