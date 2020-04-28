import runGameEngine from '../index.js';
import getRandomInt from '../getRandomInt.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const findGCD = (a, b) => {
  let div = Math.min(a, b);
  while (div > 1) {
    if (a % div === 0 && b % div === 0) {
      return div;
    }
    div -= 1;
  }
  return 1;
};

const getGameData = () => {
  const [number1, number2] = [getRandomInt(1, 100), getRandomInt(1, 100)];

  const question = `${number1} ${number2}`;

  const correctAnswer = `${findGCD(number1, number2)}`;

  return [question, correctAnswer];
};

const runBrainGCD = () => runGameEngine(gameRule, getGameData);

export default runBrainGCD;
