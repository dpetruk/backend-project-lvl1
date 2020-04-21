import game from '../index.js';
import getRandomInt from '../getRandomInt.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const getExpression = () => {
  const number1 = getRandomInt(100);
  const number2 = getRandomInt(100);
  return `${number1} ${number2}`;
};

const findGCD = (a, b, div) => {
  if (a % div === 0 && b % div === 0) {
    return div;
  }
  return findGCD(a, b, div - 1);
};

const getExpectedAnswer = (expression) => {
  const numbers = expression.split(' ');
  const number1 = Number(numbers[0]);
  const number2 = Number(numbers[1]);
  const min = Math.min(number1, number2);
  return `${findGCD(number1, number2, min)}`;
};

export default game(gameRule, getExpression, getExpectedAnswer);
