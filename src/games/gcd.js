import { launchGame } from '../index.js';
import { generateRandomNumber } from '../helpers.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

function getGcd(a, b) {
  if (!b) {
    return a;
  }
  return getGcd(b, a % b);
}

const generateRound = () => {
  const firstNumber = generateRandomNumber(1, 100);
  const secondNumber = generateRandomNumber(1, 100);

  const answer = String(getGcd(firstNumber, secondNumber));

  const question = `${firstNumber} ${secondNumber}`;

  return [question, answer];
};

export const startGcdGame = launchGame(generateRound, gameDescription);

export default startGcdGame;
