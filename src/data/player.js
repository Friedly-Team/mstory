import { dice } from '../data/utils.js';

export const PLAYER_MAX_ENERGY = 10;
export const PLAYER_MAX_LUCK = 10;
export const PLAYER_DEFAULT_LUCK = 1;

// 100% to succeed in picking mushrooms (if other params are max)
// can be changed to 0.8 or other, to make game more difficult
const MAX_MUSHROOM_PICK_CHANCE = 1;

// from 0 to 1
function getMushroomChance(luckValue) {
  return MAX_MUSHROOM_PICK_CHANCE * luckValue / PLAYER_MAX_LUCK;
}

const player = {
  name: "Player",

  // stats
  energy: PLAYER_MAX_ENERGY,
  maxEnergy: PLAYER_MAX_ENERGY,

  // parameters
  luck: PLAYER_DEFAULT_LUCK,
  maxLuck: PLAYER_MAX_LUCK,

  // inventory
  mushrooms: 0,
  money: 0,

  tryCollectMushrooms() {
    const chanceToPickMushroom = getMushroomChance(this.luck);
    return dice(chanceToPickMushroom);
  },

  hasMoney: function () {
    return this.money > 0;
  },
  hasEnergy: function () {
    return this.energy > 0;
  },
  hasMushrooms: function () {
    return this.mushrooms > 0;
  }
};

export default player;
