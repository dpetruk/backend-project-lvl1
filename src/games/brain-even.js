import game from '../index.js';
import getRandomInt from '../getRandomInt.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getNumber = () => {
  const number = getRandomInt(100);
  return number;
};

const getExpectedAnswer = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export default game(gameRule, getNumber, getExpectedAnswer);
