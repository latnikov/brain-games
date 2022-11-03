import { gameLaunch } from '../../index.js';
import { generateRandomNumber } from '../helpers.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const isPrime = (n) => {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

export const startPrimeGame = gameLaunch(() => {
  const number = generateRandomNumber(0, 100);
  const answer = isPrime(number) ? 'yes' : 'no';
  const question = `${number}`;
  return [question, answer];
}, gameDescription);

export default startPrimeGame;
