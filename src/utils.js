const dice = chance => {
  const value =  Math.floor((Math.random() * 100)) + 1;
  return value <= chance * 100;
};

const boolDice = () => {
  const isChange = Math.floor(Math.random() * 2);
  return !!isChange;
};

export {dice, boolDice};