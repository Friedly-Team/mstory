import React from "react";
import GameHeader from "./GameHeader";

import "../css/GameScreen.css"

const GameScreen = ({location, player, locations, setLocation}) => {
  const { actions, image } = location;
  const actionUI = ({func, name}) => (
    <button onClick={() => func(player)} key={name}>
      {name}
    </button>
  );
  return (
    <div className="GameScreen">
      <GameHeader
        player={player}
        locations={locations}
        setLocation={setLocation}
      />
      <div className="GameLocationImage">
        <img src={image} alt="" />
      </div>
      <div className="GameAction">{actions.map(actionUI)}</div>
    </div>
  );
};

export default GameScreen;
