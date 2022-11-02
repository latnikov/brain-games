import { newGame, generateRandomNumber, askQuestion } from '../../index.js';

const gameDescription = 'What is the result of the expression?';

export const startCalcGame = newGame(() => {
  const firstNumber = generateRandomNumber(1, 12);
  const secondNumber = generateRandomNumber(1, 12);
  const operators = ['*', '-', '+'];
  const operation = operators[generateRandomNumber(0, 2)];
  let correctAnswer;
  if (operation === '*') {
    correctAnswer = firstNumber * secondNumber;
  } else if (operation === '+') {
    correctAnswer = firstNumber + secondNumber;
  } else {
    correctAnswer = firstNumber - secondNumber;
  }
  const theExpression = `${firstNumber} ${operation} ${secondNumber}`;

  const userAnswer = askQuestion(`Question: ${theExpression}`);

  return [userAnswer, correctAnswer];
}, gameDescription);

export default startCalcGame;
