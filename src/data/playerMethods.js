function eat (player, updatePlayer) {
  if (player.hasMushrooms() && player.energy < player.maxEnergy) {
    updatePlayer(
      {
        energy: player.energy + 1,
        mushrooms: player.mushrooms - 1
      }
    );
  }
}

function sleep (player, updatePlayer) {
  updatePlayer({ energy: player.maxEnergy })
}

function sell (player, updatePlayer) {
  if (player.hasMushrooms()) {
    updatePlayer({
      money: player.money + 2,
      mushrooms: player.mushrooms - 1
    });
  }
}

function collect (player, updatePlayer) {
  if (player.hasEnergy()) {
    updatePlayer({
      mushrooms: player.mushrooms + 1,
      energy: player.energy - 1
    });
  }
}

function goDeeper (player, updatePlayer) {
  if (player.hasEnergy()) {
    updatePlayer({ energy: player.energy - 1 });
  }
}


export {eat, sleep, sell, collect, goDeeper};