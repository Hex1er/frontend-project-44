import { getRandom, runGeneralLogic } from '../index.js';

const getCalcGameTask = () => {
  const firstRandomNumber = getRandom(100);
  const secondRandomNumber = getRandom(100);
  const signs = ['+', '-', '*'];
  const randomSign = signs[getRandom(2)];
  const question = `${firstRandomNumber} ${randomSign} ${secondRandomNumber}`;
  let rightAnswer;
  if (randomSign === signs[0]) {
    rightAnswer = firstRandomNumber + secondRandomNumber;
  } else if (randomSign === signs[1]) {
    rightAnswer = firstRandomNumber - secondRandomNumber;
  } else {
    rightAnswer = firstRandomNumber * secondRandomNumber;
  }
  rightAnswer = rightAnswer.toString();
  return [question, rightAnswer];
};

const runCalcGame = () => {
  const calcGameDescription = 'What is the result of the expression?';
  runGeneralLogic(calcGameDescription, getCalcGameTask);
};

export default runCalcGame;
