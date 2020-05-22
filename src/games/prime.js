import runGameEngine from '../index.js';
import getRandomInt from '../getRandomInt.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const getGameData = () => {
  const number = getRandomInt(2, 500);

  const question = number.toString();

  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const runBrainPrime = () => runGameEngine(gameRule, getGameData);

export default runBrainPrime;
