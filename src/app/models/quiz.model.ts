export interface TriviaCategoriesDTO {
  trivia_categories: TriviaCategory[];
}

export interface TriviaCategory {
  id: number;
  name: string;
}

export enum TriviaDifficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

export interface TriviaQuestionResponseDTO {
  response_code: number;
  results: TriviaQuestionDTO[];
}

export interface TriviaQuestionDTO {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

export interface TriviaQuestion {
  question: string;
  correctAnswer: string;
  answers: string[];
  selectedAnswer?: string;
}
