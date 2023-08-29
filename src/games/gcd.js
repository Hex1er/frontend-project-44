import runGeneralLogic from '../index.js';
import getRandom from '../utils.js';

const getGCD = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (b !== 0) {
    const remainder = a % b;
    a = b;
    b = remainder;
  }
  return a;
};

const getGcdGameTask = () => {
  const firstRandomNumber = getRandom(100);
  const secondRandomNumber = getRandom(100);
  const question = `${firstRandomNumber} ${secondRandomNumber}`;
  const rightAnswer = getGCD(firstRandomNumber, secondRandomNumber).toString();
  return [question, rightAnswer];
};

const runGcdGame = () => {
  const gcdGameDescription = 'Find the greatest common divisor of given numbers.';
  runGeneralLogic(gcdGameDescription, getGcdGameTask);
};

export default runGcdGame;
