import game from '../index.js';
import getRandomInt from '../getRandomInt.js';

const gameRule = 'What number is missing in the progression?';

const getExpression = () => {
  const firstNumber = getRandomInt(100);
  const diff = getRandomInt(30);
  const hiddenElementPosition = getRandomInt(9);
  const progression = [];
  for (let i = 0; i < 10; i += 1) {
    progression.push(firstNumber + diff * i);
  }
  progression[hiddenElementPosition] = '..';
  return progression.join(' ');
};

const getHiddenPosition = (progression) => {
  let hiddenElementPosition;
  for (let i = 0; i < 10; i += 1) {
    if (progression[i] === '..') {
      hiddenElementPosition = i;
    }
  }
  return hiddenElementPosition;
};

const getExpectedAnswer = (expression) => {
  const progression = expression.split(' ');
  const hiddenElementPosition = getHiddenPosition(progression);
  if (hiddenElementPosition > 1) {
    const diff = Number(progression[1]) - Number(progression[0]);
    return `${Number(progression[hiddenElementPosition - 1]) + diff}`;
  }
  const diff = Number(progression[9]) - Number(progression[8]);
  return `${Number(progression[hiddenElementPosition + 1]) - diff}`;
};

export default game(gameRule, getExpression, getExpectedAnswer);
