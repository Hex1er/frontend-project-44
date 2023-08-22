import { getRandom, heartOfGames } from '../index.js';

const calcGame = () => {
  const calcGameDescription = 'What is the result of the expression?';
  const calcGameTask = () => {
    const firstRandomNumber = getRandom(100);
    const secondRandomNumber = getRandom(100);
    const signs = ['+', '-', '*'];
    const randomSign = signs[getRandom(2)];
    const question = `${firstRandomNumber} ${randomSign} ${secondRandomNumber}`;
    let result;
    if (randomSign === signs[0]) {
      result = firstRandomNumber + secondRandomNumber;
    } else if (randomSign === signs[1]) {
      result = firstRandomNumber - secondRandomNumber;
    } else {
      result = firstRandomNumber * secondRandomNumber;
    }
    result = result.toString();
    return [question, result];
  };
  heartOfGames(calcGameDescription, calcGameTask);
};

export default calcGame;
