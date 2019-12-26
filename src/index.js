import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Player, LocationsData } from "./data";

import GameScreen from "./components/GameScreen";

import "./css/index.css";

const App = () => {
  const [player, updatePlayer] = useState(Player);
  const GlobalLocationData = new LocationsData(updatePlayer);
  const [locations] = useState(GlobalLocationData.locations);
  const [location, setLocation] = useState(GlobalLocationData.locations[0]);

  return (
    <div className="App">
      <GameScreen
        location={location}
        player={player}
        locations={locations}
        setLocation={setLocation}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
