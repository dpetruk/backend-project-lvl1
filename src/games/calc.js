import gameLogic from '../index.js';
import getRandomInt from '../getRandomInt.js';

const gameRule = 'What is the result of the expression?';

const getExpressionElements = () => {
  const operators = ['+', '-', '*'];
  const operatorIndex = getRandomInt(0, 2);
  const number1 = getRandomInt(0, 100);
  const number2 = getRandomInt(0, 100);
  return [number1, number2, operators[operatorIndex]];
};

const getGameData = () => {
  const [number1, number2, operator] = getExpressionElements();

  const questionContent = `${number1} ${operator} ${number2}`;

  let correctAnswer;
  if (operator === '+') correctAnswer = `${number1 + number2}`;
  if (operator === '-') correctAnswer = `${number1 - number2}`;
  if (operator === '*') correctAnswer = `${number1 * number2}`;

  return [questionContent, correctAnswer];
};

const brainCalc = () => gameLogic(gameRule, getGameData);

export default brainCalc;
