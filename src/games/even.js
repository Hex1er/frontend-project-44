import { getRandom, runGeneralLogic } from '../index.js';

const isEven = (num) => num % 2 === 0;

const getEvenGameTask = () => {
  const question = getRandom(100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const runEvenGame = () => {
  const evenGameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGeneralLogic(evenGameDescription, getEvenGameTask);
};

export default runEvenGame;
