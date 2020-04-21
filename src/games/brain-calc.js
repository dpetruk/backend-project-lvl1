import game from '../index.js';
import getRandomInt from '../getRandomInt.js';

const gameRule = 'What is the result of the expression?';

const getExpressionElements = () => {
  const operators = ['+', '-', '*'];
  const opIndex = getRandomInt(3);
  const number1 = getRandomInt(100);
  const number2 = getRandomInt(100);
  return [number1, number2, operators[opIndex]];
};

const getGameData = () => {
  const [number1, number2, operator] = getExpressionElements();
  const expression = `${number1} ${operator} ${number2}`;

  let expectedAnswer;
  if (operator === '+') expectedAnswer = `${number1 + number2}`;
  if (operator === '-') expectedAnswer = `${number1 - number2}`;
  if (operator === '*') expectedAnswer = `${number1 * number2}`;

  return [expression, expectedAnswer];
};

export default game(gameRule, getGameData);
