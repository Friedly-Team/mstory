import React from "react";

import '../css/LocationPanel.css';

const LocationPanel = ({setLocation, locations}) => {
  const showLocations = ({title}) => (
    <option value={title} key={title}>
      {title}
    </option>
  );
  return <div className="LocationPanel">
    <select onChange={({currentTarget}) => {
      const v = currentTarget.value;
      const obj = locations.find(el => el.title === v);
      setLocation(obj)
    }}>
      {locations.map(showLocations)}
    </select>
  </div>;
};

export default LocationPanel;
