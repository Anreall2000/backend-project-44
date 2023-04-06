const progression = () => {
  const startNum = Math.floor(Math.random() * 19) + 1;
  const step = Math.floor(Math.random() * 9) + 1;
  const series = [];
  for (let i = 1; i < 10; i += 1) {
    series.push(startNum + step * i);
  }
  const missedIndex = Math.floor(Math.random() * 10);
  const answer = series[missedIndex];
  series[missedIndex] = '..';
  return [`${series.join(' ')}`, `${answer}`];
};

export default progression;
