import readlineSync from 'readline-sync';

export const getRandom = (max) => Math.round(Math.random() * max);

export const getRandomRange = (min, max) => Math.round(Math.random() * (max - min) + min);

export const runGeneralLogic = (gameDescription, runGameTask) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameDescription);
  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const TakeQuestionAndAnswer = runGameTask();
    console.log(`Question: ${TakeQuestionAndAnswer[0]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = TakeQuestionAndAnswer[1];
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}". \nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
