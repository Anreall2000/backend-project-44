function getRandomInt() {
  return Math.floor(Math.random() * 100 + 1);
}

function orderNums(firstNum, secondNum) {
  return firstNum < secondNum ? [firstNum, secondNum] : [secondNum, firstNum];
}

function euclid(firstNum, secondNum) {
  let [firstArg, secondArg] = orderNums(firstNum, secondNum);
  let reminder = firstArg % secondArg;
  while (reminder !== 0) {
    reminder = firstArg - Math.floor(firstArg / secondArg) * secondArg;
    [firstArg, secondArg] = [secondArg, reminder];
  }
  return firstArg;
}

const gcd = () => {
  const firstNum = getRandomInt();
  const secondNum = getRandomInt();
  const answer = euclid(firstNum, secondNum);
  return [`${firstNum} ${secondNum}`, `${answer}`];
};

export default gcd;
