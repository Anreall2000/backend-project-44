const allPrimes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41,
  43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103]);

function getRandomInt() {
  return Math.floor(Math.random() * 98 + 2);
}

const prime = () => {
  const num = getRandomInt();
  return [num, allPrimes.has(num) ? 'yes' : 'no'];
};

export default prime;
