import { dice } from '../utils';

export const PLAYER_MAX_ENERGY = 10;
// export const PLAYER_MAX_LUCK = 10;
// export const PLAYER_DEFAULT_LUCK = 1;


const player = {
  name: "Player",
  // stats
  energy: PLAYER_MAX_ENERGY,
  maxEnergy: PLAYER_MAX_ENERGY,
  // parameters
  // luck: PLAYER_DEFAULT_LUCK,
  // maxLuck: PLAYER_MAX_LUCK,
  // inventory
  mushrooms: 0,
  money: 0,

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
