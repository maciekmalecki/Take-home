export interface Data {
  sport: string;
  // Use optional for participant1, participant2 and score to allow printing solution despite invalid input
  participant1?: string;
  participant2?: string;
  score?: string | string[][];
}

export interface ParsedData {
  name: string;
  score: string;
}
