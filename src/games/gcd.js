import { gameLaunch } from '../../index.js';
import { generateRandomNumber } from '../helpers.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

function getDivider(a, b) {
  if (!b) {
    return a;
  }
  return getDivider(b, a % b);
}

export const startGcdGame = gameLaunch(() => {
  const firstNumber = generateRandomNumber(1, 100);
  const secondNumber = generateRandomNumber(1, 100);

  const answer = String(getDivider(firstNumber, secondNumber));

  const question = `${firstNumber} ${secondNumber}`;

  return [question, answer];
}, gameDescription);

export default startGcdGame;
