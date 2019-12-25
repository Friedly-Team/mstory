import React from "react";

import "../css/gameScreen.css";

const GameScreen = props => {
  const loc = props.currentLoc;
  const player = props.player;
  const actionUI = obj => (
    <button onClick={() => obj.func(player)}>{obj.name}</button>
  );
  return (
    <div className="GameScreen">
      <div className="GameScreenHeader">
        <div className="GamePlayerStats">
          <span>Energy: {player.energy} </span>
          <span>Гриб: {player.mushrooms} </span>
          <span>Money: {player.money} </span>
        </div>
        <div>
          <h2>{loc.title}</h2>
        </div>
      </div>
      <div className="GameLocationImage">
        <img src={loc.image} alt="" />
      </div>
      <div className="GameAction">{loc.actions.map(actionUI)}</div>
    </div>
  );
};

export default GameScreen;
