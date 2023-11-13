const formatSoccer = (match) => ({
  name: `${match.participant1} - ${match.participant2}`,
  score: match.score,
});

module.exports = formatSoccer;