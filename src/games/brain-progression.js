import game from '../index.js';
import getRandomInt from '../getRandomInt.js';

const gameRule = 'What number is missing in the progression?';

const progressionLength = 10;

const getProgression = () => {
  const firstNumber = getRandomInt(100);
  const diff = getRandomInt(30);
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstNumber + diff * i);
  }
  return progression;
};

const getHiddenPosition = () => getRandomInt(progressionLength - 1);

const getGameData = () => {
  const progression = getProgression();
  const hiddenElementPosition = getHiddenPosition();
  const hiddenElement = progression[hiddenElementPosition];
  progression[hiddenElementPosition] = '..';
  const expression = progression.join(' ');

  const expectedAnswer = `${hiddenElement}`;

  return [expression, expectedAnswer];
};

export default game(gameRule, getGameData);
