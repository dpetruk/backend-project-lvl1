import readlineSync from 'readline-sync';

const getName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

const roundsNumber = 3;

const getAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const checkAnswer = (expectedAnswer, answer) => {
  if (expectedAnswer === answer) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${expectedAnswer}"`);
  return false;
};

const round = (roundsLeft, getExpression, getExpectedAnswer) => {
  if (roundsLeft === 0) {
    return 'Congratulations, ';
  }

  const currentExpression = getExpression();
  console.log(`Question: ${currentExpression}`);

  const result = checkAnswer(getExpectedAnswer(currentExpression), getAnswer());

  if (!result) return 'Let\'s try again, ';

  return round(roundsLeft - 1, getExpression, getExpectedAnswer);
};

const game = (gameRule, getExpression, getExpectedAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = getName();
  console.log(`Hello, ${userName}!`);

  console.log(gameRule);

  return `${round(roundsNumber, getExpression, getExpectedAnswer)}${userName}!`;
};

export default game;
export { getName };
