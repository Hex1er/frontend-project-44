import readlineSync from 'readline-sync';

const heartOfGames = (gameDescription, gameTask) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameDescription);
  for (let i = 0; i < 3; i += 1) {
    const questionRes = gameTask();
    console.log(`Question: ${questionRes[0]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = questionRes[1];
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}". \nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default heartOfGames;
