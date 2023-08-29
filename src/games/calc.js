import runGeneralLogic from '../index.js';
import getRandom from '../utils.js';

const calculateAnswer = (firstNumber, secondNumber, operator) => {
  if (operator === '+') {
    return firstNumber + secondNumber;
  } if (operator === '-') {
    return firstNumber - secondNumber;
  }
  return firstNumber * secondNumber;
};

const getCalcGameTask = () => {
  const firstRandomNumber = getRandom(100);
  const secondRandomNumber = getRandom(100);
  const signs = ['+', '-', '*'];
  const randomSign = signs[getRandom(2)];
  const question = `${firstRandomNumber} ${randomSign} ${secondRandomNumber}`;
  const rightAnswer = calculateAnswer(firstRandomNumber, secondRandomNumber, randomSign).toString();
  return [question, rightAnswer];
};

const runCalcGame = () => {
  const calcGameDescription = 'What is the result of the expression?';
  runGeneralLogic(calcGameDescription, getCalcGameTask);
};

export default runCalcGame;
