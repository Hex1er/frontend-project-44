import { getRandom, getRandomRange, runGeneralLogic } from '../index.js';

const runProgressionGame = () => {
  const progressDescription = 'What number is missing in the progression?';
  const runProgressGameTask = () => {
    const firstNumber = getRandom(100);
    const step = getRandomRange(1, 10);
    const length = 10;
    const progression = [];
    for (let i = 0; i < length; i += 1) {
      progression.push(firstNumber + step * i);
    }
    const randomNumberIndex = getRandomRange(0, length - 1);
    const hiddenNumber = progression[randomNumberIndex];
    progression[randomNumberIndex] = '..';
    const question = progression.join(' ');
    const rightAnswer = hiddenNumber.toString();
    return [question, rightAnswer];
  };

  runGeneralLogic(progressDescription, runProgressGameTask);
};

export default runProgressionGame;
