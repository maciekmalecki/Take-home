const formatHanball = (match) => ({
  name: `${match.participant1} vs ${match.participant2}`,
  score: match.score,
});

module.exports = formatHanball;
