export const subtractFromDate = (
  date,
  { years, days, hours, minutes, seconds, milliseconds } = {}
) => {
  const millisecondsOffset = milliseconds ?? 0;
  const secondsOffset = seconds ? 1000 * seconds : 0;
  const minutesOffset = minutes ? 1000 * 60 * minutes : 0;
  const hoursOffset = hours ? 1000 * 60 * 60 * hours : 0;
  const daysOffset = days ? 1000 * 60 * 60 * 24 * days : 0;
  const dateOffset =
    millisecondsOffset +
    secondsOffset +
    minutesOffset +
    hoursOffset +
    daysOffset;

  let newDate = date;
  if (years) newDate = date.setFullYear(date.getFullYear() - years);
  newDate = new Date(newDate - dateOffset);

  return newDate;
};
