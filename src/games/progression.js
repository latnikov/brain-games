import { gameLaunch } from '../../index.js';
import { generateRandomNumber } from '../helpers.js';

const gameDescription = 'What number is missing in the progression?';

function getProgression(start, step, length) {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
}

export const startProgressionGame = gameLaunch(() => {
  const firstNumber = generateRandomNumber(0, 50);
  const step = generateRandomNumber(2, 8);
  const length = generateRandomNumber(6, 15);
  const progression = getProgression(firstNumber, step, length);
  const ind = Math.floor(Math.random() * progression.length);
  const correctAnswer = progression[ind];
  progression[ind] = '..';
  const question = `${progression.join(' ')}`;
  return [question, correctAnswer];
}, gameDescription);

export default startProgressionGame;
