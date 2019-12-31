import React from "react";
import LocationPanel from "./LocationPanel";

import '../css/GameHeader.css';

export default ({player, locations, setLocation}) => {
  return (
    <div className="GameScreenHeader">
      <div className="GamePlayerStats">
        <span>Day 1</span>
        <span>🔋 {player.energy} </span>
        <span>☘️ {player.luck} </span>
        <span>🍄 {player.mushrooms} </span>
        <span>💰 {player.money} </span>
      </div>
      <LocationPanel locations={locations} setLocation={setLocation} />
    </div>
  )
}