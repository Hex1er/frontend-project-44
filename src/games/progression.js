import { getRandom, getRandomRange, heartOfGames } from '../index.js';

const progressionGame = () => {
  const progressDescription = 'What number is missing in the progression?';
  const progressGameTask = () => {
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
    const result = hiddenNumber.toString();
    return [question, result];
  };

  heartOfGames(progressDescription, progressGameTask);
};

export default progressionGame;
