import { getRandom, runGeneralLogic } from '../index.js';

const runPrimeGame = () => {
  const primeGameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const runPrimeGameTask = () => {
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
    const rightAnswer = isPrime(randomNumber) ? 'yes' : 'no';
    return [question, rightAnswer];
  };
  runGeneralLogic(primeGameDescription, runPrimeGameTask);
};

export default runPrimeGame;
