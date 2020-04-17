import readlineSync from 'readline-sync';

const getName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

const getRandomInt = () => {
  const max = 100;
  return Math.floor(Math.random() * max);
};

const getAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const getExpectedAnswer = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const getTestResult = (expectedAnswer, answer) => {
  if (expectedAnswer === answer) {
    return true;
  }
  return false;
};

const changeCounter = (result, counter) => {
  if (result === true) return counter + 1;
  return 0;
};

export {
  getName, getRandomInt, getExpectedAnswer, getAnswer, getTestResult, changeCounter,
};
