import readlineSync from 'readline-sync';

let score = 0;
const tries = 3;

export const welcomeUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  return name;
};

export const answerComparison = (userName, getAnswers) => {
  const [userAnswer, correctAnswer] = getAnswers();
  if (String(userAnswer) !== String(correctAnswer)) {
    console.log(`'${userAnswer}'is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
    return;
  }

  score += 1;
  console.log('Correct!');

  if (score === tries) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }
  answerComparison(userName, getAnswers);
};

export const askQuestion = (question) => {
  console.log(question);
  return readlineSync.question('Your answer: ');
};

export const newGame = (game, description) => () => {
  const userName = welcomeUser();
  console.log(description);
  answerComparison(userName, game);
};

export function generateRandomNumber(min, max) {
  // получить случайное число от (min-0.5) до (max+0.5)
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

export function gcd(a, b) {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
}

export default generateRandomNumber;
