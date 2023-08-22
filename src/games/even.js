import { getRandom, heartOfGames } from '../index.js';

const evenGame = () => {
  const evenGameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  const evenGameTask = () => {
    const question = getRandom(100);
    const isEven = (num) => num % 2 === 0;
    const result = isEven(question) ? 'yes' : 'no';
    return [question, result];
  };
  heartOfGames(evenGameDescription, evenGameTask);
};

export default evenGame;
