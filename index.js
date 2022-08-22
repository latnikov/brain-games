import readlineSync from 'readline-sync';

export const welcomeUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  return name;
};

export function generateRandomNumber(max) {
  return Math.floor(Math.random() * max) + 1;
}

export default generateRandomNumber;
