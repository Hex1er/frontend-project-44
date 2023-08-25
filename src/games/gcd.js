import { getRandom, runGeneralLogic } from '../index.js';

const runGcdGame = () => {
  const gcdGameDescription = 'Find the greatest common divisor of given numbers.';
  const runGcdGameTask = () => {
    const firstRandomNumber = getRandom(100);
    const secondRandomNumber = getRandom(100);
    const question = `${firstRandomNumber} ${secondRandomNumber}`;
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
    const rightAnswer = getGcd(firstRandomNumber, secondRandomNumber).toString();
    return [question, rightAnswer];
  };
  runGeneralLogic(gcdGameDescription, runGcdGameTask);
};

export default runGcdGame;
