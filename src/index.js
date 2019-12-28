import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Player, LocationsData } from "./data";

import GameScreen from "./components/GameScreen";

import "./css/index.css";

const App = () => {
  const [player, updatePlayer] = useState(Player);
  const updatePlayerData = newObject => {
    updatePlayer({
      ...player,
      ...newObject
    })
  };
  const [locations] = useState(LocationsData);
  const [currentLocation, setCurrLocation] = useState(LocationsData[0]);

  return (
    <div className="App">
      <GameScreen
        player={player}
        update={updatePlayerData}
        location={currentLocation}
        locations={locations}
        setLocation={setCurrLocation}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
