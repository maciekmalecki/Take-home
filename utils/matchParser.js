const {
  basketballFormatter,
  handballFormatter,
  soccerFormatter,
  tennisFormatter,
  volleyballFormatter,
} = require('../formatters');

const getFormatter = (sport) => {
  switch (sport) {
    case 'basketball':
      return basketballFormatter;
    case 'handball':
      return handballFormatter;
    case 'soccer':
      return soccerFormatter;
    case 'tennis':
      return tennisFormatter;
    case 'volleyball':
      return volleyballFormatter;
    default:
      return null;
  }
};

const parseMatch = (match) => {
  const formatter = getFormatter(match.sport);
  if (!formatter) {
    throw new Error(`No formatter available for sport: ${match.sport}`);
  }
  return formatter(match);
};

module.exports = parseMatch;
