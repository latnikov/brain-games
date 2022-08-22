import readlineSync from 'readline-sync';
import { generateRandomNumber, welcomeUser } from '../index.js';

export const isEven = () => {
  let score = 0;
  const tries = 3;
  let randomNumber;
  let evenFlag;
  const userName = welcomeUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (score !== tries) {
    randomNumber = generateRandomNumber(100);
    evenFlag = randomNumber % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== 'yes' && answer !== 'no') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${evenFlag}'`);
      console.log('Let\'s try again, Bill!');
      break;
    } else if (answer !== evenFlag) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${evenFlag}'`);
      console.log('Let\'s try again, Bill!');
      break;
    } else {
      console.log('Correct!');
      score += 1;
    }
  }
  if (score === 3) {
    console.log(`Congratulations,${userName}`);
  }
};

export default isEven;
