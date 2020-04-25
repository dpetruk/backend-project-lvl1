import gameLogic from '../index.js';
import getRandomInt from '../getRandomInt.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  const maxDivisorToCheck = Math.floor(number / 2);
  for (let i = 2; i <= maxDivisorToCheck; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const getGameData = () => {
  const number = getRandomInt(2, 500);

  const questionContent = `${number}`;

  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return [questionContent, correctAnswer];
};

const brainPrime = () => gameLogic(gameRule, getGameData);

export default brainPrime;
