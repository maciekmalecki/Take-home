"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const matches_1 = __importDefault(require("./data/matches"));
class EventParser {
    makeEventName({ sport, participant1, participant2 }) {
        switch (sport) {
            case types_1.SOCCER:
            case types_1.VOLLEYBALL:
            case types_1.BASKETBALL:
                return `${participant1} - ${participant2}`;
            case types_1.TENNIS:
            case types_1.HANDBALL:
                return `${participant1} vs ${participant2}`;
            default:
                return types_1.INVALID_SPORT;
        }
    }
    formatScore({ score }) {
        if (!score) {
            return types_1.INVALID_SCORE;
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
            const setResultArr = [];
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
const matchesParsed = [];
const parser = new EventParser();
matches_1.default.forEach((match) => {
    const name = parser.makeEventName(match);
    const score = parser.formatScore(match);
    if (name !== types_1.INVALID_SPORT && score !== types_1.INVALID_SCORE) {
        matchesParsed.push({
            name,
            score,
        });
    }
});
console.log(matchesParsed);
