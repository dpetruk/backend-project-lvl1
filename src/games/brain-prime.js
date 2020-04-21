import game from '../index.js';
import getRandomInt from '../getRandomInt.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getExpression = () => `${getRandomInt(1000)}`;

const getExpectedAnswer = (expression) => {
  const number = Number(expression);
  const threshold = Math.floor(number / 2);
  for (let i = 2; i <= threshold; i += 1) {
    if (number % i === 0) return 'no';
  }
  return 'yes';
};

export default game(gameRule, getExpression, getExpectedAnswer);
