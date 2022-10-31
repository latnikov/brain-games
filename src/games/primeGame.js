import {
  newGame, askQuestion, generateRandomNumber, isPrime,
} from '../../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const playPrime = newGame(() => {
  const secretNumber = generateRandomNumber(0, 100);
  const correctAnswer = isPrime(secretNumber) ? 'yes' : 'no';
  const userAnswer = askQuestion(`Question: ${secretNumber}`);
  return [userAnswer, correctAnswer];
}, gameDescription);

export default playPrime;
