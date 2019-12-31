import React from "react";

import '../css/EnergyBar.css'

export default ({player}) => {
  const energyBarWith = (player.energy * 100) / player.maxEnergy + '%';
  return (
    <div className="EnergyBar">
      <div className="EnergyBarValue" style={{width: energyBarWith }}>
        <div className="EnergyBarText">
          Energy: {player.energy}/{player.maxEnergy}
        </div>
      </div>
    </div>
  )
}