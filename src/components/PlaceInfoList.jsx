import PlaceInfoItems from "./PlaceInfoItems";

const PlaceInfoList = ({ placeData, check }) => {
  const placeListsPlaceData = [...placeData];

  return (
    <div className="placeList">
      <ul>
        {placeListsPlaceData.map((place) => (
          <PlaceInfoItems placeData={place} key={place.id} check={check} />
        ))}
      </ul>
    </div>
  );
};

export default PlaceInfoList;
