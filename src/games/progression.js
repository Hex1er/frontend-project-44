import runGeneralLogic from '../index.js';
import getRandom from '../utils.js';

const createProgression = (firstNumber, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(firstNumber + step * i);
  }
  return progression;
};

const getProgressGameTask = () => {
  const firstNumber = getRandom(100);
  const step = getRandom(1, 10);
  const length = 10;
  const progression = createProgression(firstNumber, step, length);
  const randomNumberIndex = getRandom(0, length - 1);
  const hiddenNumber = progression[randomNumberIndex];
  progression[randomNumberIndex] = '..';
  const question = progression.join(' ');
  const rightAnswer = hiddenNumber.toString();
  return [question, rightAnswer];
};

const runProgressionGame = () => {
  const progressDescription = 'What number is missing in the progression?';
  runGeneralLogic(progressDescription, getProgressGameTask);
};

export default runProgressionGame;
