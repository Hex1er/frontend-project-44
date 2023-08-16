import heartOfGames from '../index.js';

const getRandom = (max) => Math.round(Math.random() * max);

const evenGame = () => {
  const evenGameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  const evenGameTask = () => {
    const question = getRandom(100);
    const isEven = (num) => num % 2 === 0;
    const res = isEven(question) ? 'yes' : 'no';
    return [question, res];
  };
  heartOfGames(evenGameDescription, evenGameTask);
};

export default evenGame;
