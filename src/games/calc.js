import { newGame, generateRandomNumber, askQuestion, } from '../../index.js';

const gameDescription = 'What is the result of the expression?';

export const calculate = newGame(() => {
  const firstNumber = generateRandomNumber(1, 12);
  const secondNumber = generateRandomNumber(1, 12);
  const operators = ['*', '-', '+'];
  const operation = operators[generateRandomNumber(0, 2)];
  const correctAnswer = (operation == '*') ? firstNumber * secondNumber: (operation == '+') ? firstNumber+secondNumber: firstNumber - secondNumber;

  const theExpression = `${firstNumber} ${operation} ${secondNumber}`;

  const userAnswer = askQuestion(`Question: ${theExpression}`);

  return [userAnswer, correctAnswer];
}, gameDescription);

export default calculate;
