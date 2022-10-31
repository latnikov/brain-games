import { newGame, createProgression, askQuestion } from '../../index.js';

const gameDescription = 'What number is missing in the progression?';

export const calculateProgression = newGame(() => {
  const progression = createProgression();
  const ind = Math.floor(Math.random() * progression.length);
  const correctAnswer = progression[ind];
  progression[ind] = '...';
  const userAnswer = askQuestion(`Question: ${progression.join(' ')}`);
  return [userAnswer, correctAnswer];
}, gameDescription);

export default calculateProgression;
