import React from "react";
import ListItemDiv from "./common/ListItemDiv";

const PlaceNameItems = ({ placeData }) => {
  const placeNameData = { ...placeData };
  const { place_name } = placeNameData;
  return <ListItemDiv>{place_name}</ListItemDiv>;
};

export default PlaceNameItems;
