import { gameLaunch } from '../../index.js';
import { generateRandomNumber } from '../helpers.js';

const gameDescription = 'What is the result of the expression?';

const calc = (a, b, operation) => {
  switch (operation) {
    case '*':
      return a * b;
    case '+':
      return a + b;
    default:
      return a - b;
  }
};

export const startCalcGame = gameLaunch(() => {
  const firstNumber = generateRandomNumber(1, 12);
  const secondNumber = generateRandomNumber(1, 12);
  const operators = ['*', '-', '+'];
  const operation = operators[generateRandomNumber(0, operators.length - 1)];
  const correctAnswer = calc(firstNumber, secondNumber, operation);
  const question = `${firstNumber} ${operation} ${secondNumber}`;
  return [question, correctAnswer];
}, gameDescription);

export default startCalcGame;
