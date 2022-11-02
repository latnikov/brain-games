import { newGame, generateRandomNumber, askQuestion } from '../../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

export const startEvenGame = newGame(() => {
  const secretNumber = generateRandomNumber(1, 100);
  const correctAnswer = secretNumber % 2 === 0 ? 'yes' : 'no';
  const userAnswer = askQuestion(`Question: ${secretNumber}`);
  return [userAnswer, correctAnswer];
}, gameDescription);

export default startEvenGame;
