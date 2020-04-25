import gameLogic from '../index.js';
import getRandomInt from '../getRandomInt.js';

const gameRule = 'What number is missing in the progression?';

const progressionLength = 10;

const getProgression = () => {
  const firstNumber = getRandomInt(0, 100);
  const diff = getRandomInt(1, 30);
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstNumber + diff * i);
  }
  return progression;
};

const getGameData = () => {
  const progression = getProgression();
  const hiddenElementPosition = getRandomInt(0, progressionLength - 1);

  const correctAnswer = `${progression[hiddenElementPosition]}`;

  progression[hiddenElementPosition] = '..';
  const questionContent = progression.join(' ');

  return [questionContent, correctAnswer];
};

const brainProgression = () => gameLogic(gameRule, getGameData);

export default brainProgression;
