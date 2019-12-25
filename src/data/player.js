export const PLAYER_MAX_ENERGY = 10;
export const PLAYER_MAX_MONEY  = 99999;
export const PLAYER_MAX_MUSHROOMS  = 99999;

const player = {
  name: "Player",

  energy: PLAYER_MAX_ENERGY,
  mushrooms: 0,
  money: 0,

  hasMoney: function() {
    return this.money > 0;
  },
  hasEnergy: function() {
    return this.energy > 0;
  },
  hasMushrooms: function() {
    return this.mushrooms > 0;
  }
};

export default player;
