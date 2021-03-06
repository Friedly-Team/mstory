import React from "react";
import GameHeader from "./GameHeader";
import PlayerEnergyBar from './PlayerEnergyBar';
import GameActionsPanel from "./GameActionsPanel";

import "../css/GameScreen.css";

const GameScreen = ({location, player, update, locations, setLocation}) => {
  return (
    <div className="GameScreen">
      <GameHeader
        player={player}
        locations={locations}
        setLocation={setLocation}
      />
      <PlayerEnergyBar player={player} />
      <div className="GameLocationImage">
        <img src={location.image} alt="" />
      </div>
      <GameActionsPanel
        location={location}
        player={player}
        update={update}
      />
    </div>
  );
};

export default GameScreen;
