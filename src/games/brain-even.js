import gameLogic from '../index.js';
import getRandomInt from '../getRandomInt.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const getGameData = () => {
  const number = getRandomInt(0, 100);

  const questionContent = `${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  return [questionContent, correctAnswer];
};

const brainEven = () => gameLogic(gameRule, getGameData);

export default brainEven;
