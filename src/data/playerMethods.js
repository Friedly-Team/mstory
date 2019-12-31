import {dice} from '../utils';

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
  updatePlayer({
    energy: player.maxEnergy,
    dayCount: player.dayCount + 1
  })
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
    let updatedMushrooms = player.mushrooms;
    let updatedLuck = player.luck;

    const shouldFind = dice(player.luck);
    if (shouldFind) {
      updatedMushrooms += 1;
      updatedLuck += 0.5;
    }
    updatePlayer({
      mushrooms: updatedMushrooms,
      luck: updatedLuck,
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