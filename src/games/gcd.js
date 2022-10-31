import {
  newGame, generateRandomNumber, askQuestion, gcd,
} from '../../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

export const playGcd = newGame(() => {
  const firstNumber = generateRandomNumber(1, 100);
  const secondNumber = generateRandomNumber(1, 100);
  const correctAnswer = gcd(firstNumber, secondNumber);

  const userAnswer = askQuestion(`Question: ${firstNumber} ${secondNumber}`);

  return [userAnswer, correctAnswer];
}, gameDescription);

export default playGcd;
