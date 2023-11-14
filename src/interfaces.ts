export interface Data {
  sport: string;
  participant1?: string;
  participant2?: string;
  score?: string | string[][];
}

export interface ParsedData {
  name: string;
  score: string;
}
