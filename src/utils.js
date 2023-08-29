const getRandom = (min = 0, max = min) => {
  if (max === min) {
    return Math.round(Math.random() * min);
  }
  return Math.round(Math.random() * (max - min) + min);
};

export default getRandom;
