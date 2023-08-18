import { getRandom, heartOfGames } from '../index.js';

const calcGame = () => {
  const calcGameDescription = 'What is the result of the expression?';
  const calcGameTask = () => {
    const firstRandomNumber = getRandom(100);
    const secondRandomNumber = getRandom(100);
    const signs = ['+', '-', '*'];
    const randomSign = signs[getRandom(2)];
    const question = `${firstRandomNumber} ${randomSign} ${secondRandomNumber}`;
    let res;
    if (randomSign === signs[0]) {
      res = firstRandomNumber + secondRandomNumber;
    } else if (randomSign === signs[1]) {
      res = firstRandomNumber - secondRandomNumber;
    } else {
      res = firstRandomNumber * secondRandomNumber;
    }
    res = res.toString();
    return [question, res];
  };
  heartOfGames(calcGameDescription, calcGameTask);
};
export default calcGame;
