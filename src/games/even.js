import { getRandom, heartOfGames } from '../index.js';

const evenGame = () => {
  const evenGameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  const evenGameTask = () => {
    const randomNumber = getRandom(100);
    const isEven = (num) => num % 2 === 0;
    const question = randomNumber;
    const res = isEven(question) ? 'yes' : 'no';
    return [question, res];
  };
  heartOfGames(evenGameDescription, evenGameTask);
};

export default evenGame;