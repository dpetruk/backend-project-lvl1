import game from '../index.js';
import getRandomInt from '../getRandomInt.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getNumber = () => getRandomInt(1000);

const isPrime = (number) => {
  const threshold = Math.floor(number / 2);
  for (let i = 2; i <= threshold; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const getGameData = () => {
  const number = getNumber();
  const expression = `${number}`;

  const expectedAnswer = isPrime(number) ? 'yes' : 'no';

  return [expression, expectedAnswer];
};

export default game(gameRule, getGameData);
