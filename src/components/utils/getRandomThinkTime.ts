const getRandomThinkTime = (): number => {
  const minSeconds = 1;
  const maxSeconds = 7;
  return Math.floor(Math.random() * (maxSeconds - minSeconds + 1)) + minSeconds;
};

export default getRandomThinkTime;
