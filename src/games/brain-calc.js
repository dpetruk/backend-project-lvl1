import game from '../index.js';
import getRandomInt from '../getRandomInt.js';

const gameRule = 'What is the result of the expression?';

const getExpression = () => {
  const operators = ['+', '-', '+'];
  const opIndex = getRandomInt(3);
  const number1 = getRandomInt(100);
  const number2 = getRandomInt(100);
  return `${number1} ${operators[opIndex]} ${number2}`;
};

const getExpectedAnswer = (expression) => {
  const elements = expression.split(' ');
  const operator = elements[1];
  const number1 = Number(elements[0]);
  const number2 = Number(elements[2]);
  if (operator === '+') return `${number1 + number2}`;
  if (operator === '-') return `${number1 - number2}`;
  return `${number1 * number2}`;
};

export default game(gameRule, getExpression, getExpectedAnswer);
