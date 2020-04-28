import runGameEngine from '../index.js';
import getRandomInt from '../getRandomInt.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getGameData = () => {
  const number = getRandomInt(0, 100);

  const question = number.toString();

  const correctAnswer = isEven(number) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const runBrainEven = () => runGameEngine(gameRule, getGameData);

export default runBrainEven;
