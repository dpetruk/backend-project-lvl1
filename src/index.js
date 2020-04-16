import readlineSync from 'readline-sync';

const toGreetWithName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return `Hello, ${userName}!`;
};

export default toGreetWithName;
