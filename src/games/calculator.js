import { gameLaunch } from '../../index.js';
import { generateRandomNumber } from '../helpers.js';

const gameDescription = 'What is the result of the expression?';

const getAnswer = (a, b, operation) => {
  let answer;
  switch (operation) {
    case '*':
      answer = a * b;
      break;
    case '+':
      answer = a + b;
      break;
    default:
      answer = a - b;
  }
  return answer;
};

export const startCalcGame = gameLaunch(() => {
  const firstNumber = generateRandomNumber(1, 12);
  const secondNumber = generateRandomNumber(1, 12);
  const operators = ['*', '-', '+'];
  const operation = operators[generateRandomNumber(0, operators.length - 1)];
  const correctAnswer = getAnswer(firstNumber, secondNumber, operation);
  const question = `${firstNumber} ${operation} ${secondNumber}`;
  return [question, correctAnswer];
}, gameDescription);

export default startCalcGame;
