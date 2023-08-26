import { getRandom, runGeneralLogic } from '../index.js';

const getGcd = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
};

const getGcdGameTask = () => {
  const firstRandomNumber = getRandom(100);
  const secondRandomNumber = getRandom(100);
  const question = `${firstRandomNumber} ${secondRandomNumber}`;
  const rightAnswer = getGcd(firstRandomNumber, secondRandomNumber).toString();
  return [question, rightAnswer];
};

const runGcdGame = () => {
  const gcdGameDescription = 'Find the greatest common divisor of given numbers.';
  runGeneralLogic(gcdGameDescription, getGcdGameTask);
};

export default runGcdGame;
