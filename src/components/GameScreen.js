import React from "react";
import LocationPanel from "./LocationPanel";

import "../css/gameScreen.css";

const GameScreen = ({location, player, locations, setLocation}) => {
  const actionUI = obj => (
    <button onClick={() => obj.func(player)}>{obj.name}</button>
  );
  return (
    <div className="GameScreen">
      <div className="GameScreenHeader">
        <div className="GamePlayerStats">
          <span>Day 1</span>
          <span>🔋 {player.energy} </span>
          <span>🍄 {player.mushrooms} </span>
          <span>💰 {player.money} </span>
        </div>
        <LocationPanel locations={locations} setLocation={setLocation} />
      </div>
      <div className="GameLocationImage">
        <img src={location.image} alt="" />
      </div>
      <div className="GameAction">{location.actions.map(actionUI)}</div>
    </div>
  );
};

export default GameScreen;
