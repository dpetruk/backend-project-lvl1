import runGameEngine from '../index.js';
import getRandomInt from '../getRandomInt.js';

const gameRule = 'What number is missing in the progression?';

const getProgression = (firstNumber, diff, progressionLength) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstNumber + diff * i);
  }
  return progression;
};

const getGameData = () => {
  const firstNumber = getRandomInt(0, 100);
  const diff = getRandomInt(1, 30);
  const progressionLength = 10;
  const progression = getProgression(firstNumber, diff, progressionLength);
  const hiddenElementPosition = getRandomInt(0, progressionLength - 1);

  const correctAnswer = `${progression[hiddenElementPosition]}`;

  progression[hiddenElementPosition] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

const brainProgression = () => runGameEngine(gameRule, getGameData);

export default brainProgression;
