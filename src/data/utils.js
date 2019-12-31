/*
Example:
chance = 0.3 = 30%
diceValue: 100 < chance  => false
diceValue: 31  < chance  => false
diceValue: 30  = chance  => true
diceValue: 1   < chance  => true
 */
function dice(chance) {
  const diceValue = Math.floor((Math.random() * 100) + 1); // 1 to 100
  return diceValue <= chance * 100;
}

export {dice};