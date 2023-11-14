import EventParser from '../app';
import { INVALID_SCORE, INVALID_SPORT } from '../types';

describe('EventParser', () => {
  let parser: EventParser;

  beforeAll(() => {
    parser = new EventParser();
  });

  test('should correctly parse a tennis event name', () => {
    const tennisMatch = {
      sport: 'tennis',
      participant1: 'Player 1',
      participant2: 'Player 2',
      score: '6:4, 6:4',
    };
    const eventName = parser.makeEventName(tennisMatch);
    expect(eventName).toBe('Player 1 vs Player 2');
  });

  test('should correctly parse a basketball match score', () => {
    const basketballMatch = {
      sport: 'basketball',
      participant1: 'Team A',
      participant2: 'Team B',
      score: [
        ['14:18', '32:25'],
        ['22:22', '22:30'],
      ],
    };
    const score = parser.formatScore(basketballMatch);
    expect(score).toBe('14:18,32:25,22:22,22:30');
  });

  test('should return an invalid sport message for unsupported sports', () => {
    const unknownMatch = {
      sport: 'squash',
      participant1: 'Mark',
      participant2: 'Tom',
      score: '21:0',
    };
    const eventName = parser.makeEventName(unknownMatch);
    expect(eventName).toBe(INVALID_SPORT);
  });

  test('should return an invalid score message when the score is undefined', () => {
    const tennisMatch = {
      sport: 'tennis',
      participant1: 'Adam',
      participant2: 'Joe',
    };
    const score = parser.formatScore(tennisMatch as any);
    expect(score).toBe(INVALID_SCORE);
  });
});
