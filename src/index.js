import readlineSync from 'readline-sync';

const greetWithName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const game = (gameRule, getGameData) => {
  const userName = greetWithName();

  const roundsNumber = 3;
  console.log(gameRule);

  let roundsLeft = roundsNumber;

  while (roundsLeft !== 0) {
    const [currentExpression, expectedAnswer] = getGameData();
    console.log(`Question: ${currentExpression}`);
    const answer = readlineSync.question('Your answer: ');

    if (expectedAnswer !== answer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${expectedAnswer}"`);
      return `Let's try again, ${userName}!`;
    }
    console.log('Correct!');

    roundsLeft -= 1;
  }

  return `Congratulations, ${userName}!`;
};

export default game;
export { greetWithName };
