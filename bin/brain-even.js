#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greet from '../src/cli.js';

function getRandomInt() {
  return Math.floor(Math.random() * 100);
}

function game(name) {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randNum = getRandomInt();
    console.log(`Question: ${randNum}`);
    const correctAnswer = randNum % 2 === 0 ? 'yes' : 'no';
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
}

const name = greet();
game(name);
