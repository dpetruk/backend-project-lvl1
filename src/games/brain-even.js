import game from '../index.js';
import getRandomInt from '../getRandomInt.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getNumber = () => {
  const number = getRandomInt(100);
  return number;
};

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const getGameData = () => {
  const number = getNumber();
  const expectedAnswer = isEven(number) ? 'yes' : 'no';
  return [number, expectedAnswer];
};

export default game(gameRule, getGameData);
