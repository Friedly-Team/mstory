import React, { useState } from "react";
import ReactDOM from "react-dom";

import GameScreen from "./components/GameScreen";
import LocationPanel from "./components/LocationPanel";
import Player from "./data/player";

import LocationsData from "./data/locations";

import "./css/index.css";

const App = () => {
  const [player, updatePlayer] = useState(Player);
  const GlobalLocationData = new LocationsData(updatePlayer);
  const [locations] = useState(GlobalLocationData.locations);
  const [location, setLocation] = useState(GlobalLocationData.locations[0]);

  return (
    <div className="App">
      <GameScreen location={location} player={player} locations={locations} setLocation={setLocation}  />
      {/*<LocationPanel locations={Locations} setCurrentLoc={setCurrentLoc} />*/}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
