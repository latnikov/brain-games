import { gameLaunch } from '../../index.js';
import { generateRandomNumber } from '../helpers.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

export const startEvenGame = gameLaunch(() => {
  const number = generateRandomNumber(1, 100);
  const question = `${number}`;
  const answer = isEven(number) ? 'yes' : 'no';
  return [question, answer];
}, gameDescription);

export default startEvenGame;
