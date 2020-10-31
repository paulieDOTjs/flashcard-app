export interface question {
  question: string;
  answer: string;
}

export interface category {
  name: string;
  cards: question[];
}
