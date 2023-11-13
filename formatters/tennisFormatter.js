const formatTennis = match => {
  const regex = /([0-9]+:[0-9]+)(?:,([0-9]+:[0-9]+))*?/;
  const scores = match.score.match(regex);

  const overallScore = scores[1];
  const setScores = scores[0].split(',').slice(1);
  const formattedSetScores = setScores.map((score, index) => `set${index + 1} ${score}`).join(', ');

  return {
      name: `${match.participant1} vs ${match.participant2}`,
      score: `Overall score: ${overallScore}, ${formattedSetScores}`
  };
};

module.exports = formatTennis;