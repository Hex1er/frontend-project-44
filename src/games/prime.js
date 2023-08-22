import { getRandom, heartOfGames } from '../index.js';

const primeGame = () => {
  const primeGameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const primeGameTask = () => {
    const randomNumber = getRandom(100);
    const isPrime = (num) => {
      if (num < 2) {
        return false;
      }
      for (let i = 2; i <= Math.sqrt(num); i += 1) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    };
    const question = randomNumber;
    const result = isPrime(randomNumber) ? 'yes' : 'no';

    return [question, result];
  };
  heartOfGames(primeGameDescription, primeGameTask);
};

export default primeGame;
