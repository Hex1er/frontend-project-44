import { getRandom, runGeneralLogic } from '../index.js';

const runEvenGame = () => {
  const evenGameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  const runEvenGameTask = () => {
    const question = getRandom(100);
    const isEven = (num) => num % 2 === 0;
    const rightAnswer = isEven(question) ? 'yes' : 'no';
    return [question, rightAnswer];
  };
  runGeneralLogic(evenGameDescription, runEvenGameTask);
};

export default runEvenGame;
