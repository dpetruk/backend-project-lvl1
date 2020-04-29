import runGameEngine from '../index.js';
import getRandomInt from '../getRandomInt.js';

const gameRule = 'What is the result of the expression?';

const getGameData = () => {
  const operations = {
    '+': (num1, num2) => num1 + num2,
    '-': (num1, num2) => num1 - num2,
    '*': (num1, num2) => num1 * num2,
  };
  const operators = Object.keys(operations);
  const operatorIndex = getRandomInt(0, operators.length - 1);
  const operator = operators[operatorIndex];
  const number1 = getRandomInt(0, 100);
  const number2 = getRandomInt(0, 100);

  const question = `${number1} ${operator} ${number2}`;

  const correctAnswer = operations[operator](number1, number2).toString();

  return [question, correctAnswer];
};

const runBrainCalc = () => runGameEngine(gameRule, getGameData);

export default runBrainCalc;
