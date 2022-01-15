export const padNumToDoubleDigits = (num) => {
  if (num < 10) return `0${num}`;
  return `${num}`;
};

export const getTimeAsMinSec = (value) => {
  const mins = Math.floor(value / 60);
  const secs = Math.floor(value % 60);

  const renderMins = padNumToDoubleDigits(mins);
  const renderSecs = padNumToDoubleDigits(secs);

  return `${renderMins}:${renderSecs}`;
};
