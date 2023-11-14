import {
  SOCCER,
  VOLLEYBALL,
  HANDBALL,
  BASKETBALL,
  TENNIS,
  INVALID_SCORE,
  INVALID_SPORT,
} from './types';
import matches from './data/matches';
import { ParsedData, Data } from './interfaces';

class EventParser {
  makeEventName({ sport, participant1, participant2 }: Data): string {
    switch (sport) {
      case SOCCER:
      case VOLLEYBALL:
      case BASKETBALL:
        return `${participant1} - ${participant2}`;
      case TENNIS:
      case HANDBALL:
        return `${participant1} vs ${participant2}`;
      default:
        return INVALID_SPORT;
    }
  }

  formatScore({ score }: Data): string {
    if (!score) {
      return INVALID_SCORE;
    }
    // basketball
    if (Array.isArray(score)) {
      const result = score.flat();
      return result.join(',');
    }
    // volleyball and tennis
    if (score.includes(',')) {
      const scoreArr = score.split(',');
      const mainScore = scoreArr[0];
      const matchResult = `Main score: ${mainScore}`;
      const setResultArr: string[] = [];
      const setArr = scoreArr.slice(1);
      setArr.forEach((set, setIndex) => {
        setResultArr.push(`set${setIndex + 1} ${set}`);
      });
      const setResult = setResultArr.join(', ');
      return `${matchResult} (${setResult})`;
    }
    // soccer and handball
    return score;
  }
}
const matchesParsed: ParsedData[] = [];
const parser = new EventParser();

matches.forEach((match) => {
  const name = parser.makeEventName(match);
  const score = parser.formatScore(match);
  if (name !== INVALID_SPORT && score !== INVALID_SCORE) {
    matchesParsed.push({
      name,
      score,
    });
  }
});

console.log(matchesParsed);

export default EventParser;
