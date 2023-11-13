const formatVolleyball = (match) => {
  const allScores = match.score.split(',');
  const overallScore = allScores[0];
  const setScores = allScores.slice(1);

  const formattedSetScores = setScores
    .map((score, index) => `set${index + 1} ${score}`)
    .join(', ');

  return {
    name: `${match.participant1} - ${match.participant2}`,
    score: `Main score: ${overallScore} (${formattedSetScores})`,
  };
};

module.exports = formatVolleyball;
