#!/usr/bin/env node
import {
  getName, getRandomInt, getExpectedAnswer, getAnswer, getTestResult, changeCounter,
} from '../src/index.js';

const requiredConsecutiveWins = 3;
let consecutiveWins = 0;

console.log('Welcome to the Brain Games!');
const userName = getName();
console.log(`Hello, ${userName}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

while (consecutiveWins !== requiredConsecutiveWins) {
  const number = getRandomInt();
  console.log(`Question: ${number}`);

  const expectedAnswer = getExpectedAnswer(number);
  const answer = getAnswer();

  const result = getTestResult(expectedAnswer, answer);

  if (result === false) {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${expectedAnswer}"`);
    console.log(`Let's try again, ${userName}!`);
  } else {
    console.log('Correct!');
  }
  consecutiveWins = changeCounter(result, consecutiveWins);
}

console.log(`Congratulations, ${userName}!`);
