function getRandomInt() {
  return Math.floor(Math.random() * 100);
}

const even = () => {
  const num = getRandomInt();
  return [num, num % 2 === 0 ? 'yes' : 'no'];
};

export default even;
