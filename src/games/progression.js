import { launchGame } from '../index.js';
import { generateRandomNumber } from '../helpers.js';

const gameDescription = 'What number is missing in the progression?';

function getProgression(start, step, length) {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
}

const generateRound = () => {
  const firstNumber = generateRandomNumber(0, 50);
  const step = generateRandomNumber(2, 8);
  const length = generateRandomNumber(6, 15);
  const progression = getProgression(firstNumber, step, length);
  const index = generateRandomNumber(0, progression.length);
  const answer = String(progression[index]);
  progression[index] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

export const startProgressionGame = launchGame(generateRound, gameDescription);

export default startProgressionGame;
