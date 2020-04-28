import runGameEngine from '../index.js';
import getRandomInt from '../getRandomInt.js';

const gameRule = 'What is the result of the expression?';

const getGameData = () => {
  const operators = ['+', '-', '*'];
  const operatorIndex = getRandomInt(0, operators.length - 1);
  const operator = operators[operatorIndex];
  const number1 = getRandomInt(0, 100);
  const number2 = getRandomInt(0, 100);

  const question = `${number1} ${operator} ${number2}`;

  let correctAnswer;
  switch (operator) {
    case '+':
      correctAnswer = (number1 + number2).toString();
      break;
    case '-':
      correctAnswer = (number1 - number2).toString();
      break;
    case '*':
      correctAnswer = (number1 * number2).toString();
      break;
    // no default
  }
  return [question, correctAnswer];
};

const brainCalc = () => runGameEngine(gameRule, getGameData);

export default brainCalc;
