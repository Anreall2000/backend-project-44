const operators = ['+', '-', '*'];

function getRandomInt() {
  return Math.floor(Math.random() * 10);
}

const calc = () => {
  const firstArg = getRandomInt();
  const secondArg = getRandomInt();
  const operator = operators[getRandomInt() % 3];
  let answer = 0;
  switch (operator) {
    case '+':
      answer = firstArg + secondArg;
      break;
    case '-':
      answer = firstArg - secondArg;
      break;
    case '*':
      answer = firstArg * secondArg;
      break;
    default:
      break;
  }
  return [`${firstArg} ${operator} ${secondArg}`, `${answer}`];
};

export default calc;
