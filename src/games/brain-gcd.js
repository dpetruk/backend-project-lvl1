import game from '../index.js';
import getRandomInt from '../getRandomInt.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const getNumbers = () => {
  const number1 = getRandomInt(100);
  const number2 = getRandomInt(100);
  return [number1, number2];
};

const findGCD = (a, b, div) => {
  if (a % div === 0 && b % div === 0) {
    return div;
  }
  return findGCD(a, b, div - 1);
};

const getGameData = () => {
  const [number1, number2] = getNumbers();
  const expression = `${number1} ${number2}`;

  const min = Math.min(number1, number2);
  const expectedAnswer = `${findGCD(number1, number2, min)}`;

  return [expression, expectedAnswer];
};

export default game(gameRule, getGameData);
