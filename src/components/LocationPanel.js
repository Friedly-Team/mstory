import React from "react";

import '../css/LocationPanel.css';

export default ({setLocation, locations}) => {
  const optionUI = ({title}) =>  <option value={title} key={title}>{title}</option>;
  return <div className="LocationPanel">
    <select onChange={({currentTarget}) => {
      const title = currentTarget.value;
      const location = locations.find(el => el.title === title);
      setLocation(location)
    }}>
      {locations.map(optionUI)}
    </select>
  </div>;
};
