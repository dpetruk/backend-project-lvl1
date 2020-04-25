import gameLogic from '../index.js';
import getRandomInt from '../getRandomInt.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const findGCD = (a, b, div = Math.min(a, b)) => {
  if (a % div === 0 && b % div === 0) {
    return div;
  }
  return findGCD(a, b, div - 1);
};

const getGameData = () => {
  const [number1, number2] = [getRandomInt(1, 100), getRandomInt(1, 100)];

  const questionContent = `${number1} ${number2}`;

  const correctAnswer = `${findGCD(number1, number2)}`;

  return [questionContent, correctAnswer];
};

const brainGCD = () => gameLogic(gameRule, getGameData);

export default brainGCD;
