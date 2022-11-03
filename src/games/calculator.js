import { launchGame } from '../index.js';
import { generateRandomNumber } from '../helpers.js';

const gameDescription = 'What is the result of the expression?';

const calculate = (a, b, operation) => {
  switch (operation) {
    case '*':
      return a * b;
    case '+':
      return a + b;
    default:
      return a - b;
  }
};

const generateRound = () => {
  const firstNumber = generateRandomNumber(1, 12);
  const secondNumber = generateRandomNumber(1, 12);
  const operators = ['*', '-', '+'];
  const operation = operators[generateRandomNumber(0, operators.length - 1)];
  const answer = String(calculate(firstNumber, secondNumber, operation));
  const question = `${firstNumber} ${operation} ${secondNumber}`;
  return [question, answer];
};

export const startCalcGame = launchGame(generateRound, gameDescription);

export default startCalcGame;
