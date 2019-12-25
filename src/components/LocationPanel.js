import React from "react";

const LocationPanel = props => {
  const showLocations = obj => (
    <button onClick={() => props.setCurrentLoc(obj)}>{obj.title}</button>
  );
  return <div className="locations">{props.locations.map(showLocations)}</div>;
};

export default LocationPanel;
