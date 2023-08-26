import { getRandom, runGeneralLogic } from '../index.js';

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

const getPrimeGameTask = () => {
  const randomNumber = getRandom(100);
  const question = randomNumber;
  const rightAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const runPrimeGame = () => {
  const primeGameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGeneralLogic(primeGameDescription, getPrimeGameTask);
};

export default runPrimeGame;
