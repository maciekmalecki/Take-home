const formatBasketball = (match) => ({
  name: `${match.participant1} - ${match.participant2}`,
  score: match.score.flat().join(','),
});

module.exports = formatBasketball;
