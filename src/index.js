import readlineSync from 'readline-sync';

const greetWithName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const gameLogic = (gameRule, getGameData) => {
  const userName = greetWithName();

  let roundsCount = 3;
  console.log(gameRule);

  while (roundsCount !== 0) {
    const [questionContent, correctAnswer] = getGameData();
    console.log(`Question: ${questionContent}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer !== userAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      console.log(`Let's try again, ${userName}!`);
      return false;
    }
    console.log('Correct!');

    roundsCount -= 1;
  }

  console.log(`Congratulations, ${userName}!`);
  return true;
};

export {
  gameLogic as default,
  greetWithName,
};
