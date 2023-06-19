import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  TriviaCategoriesDTO,
  TriviaCategory,
  TriviaQuestion,
  TriviaQuestionDTO,
  TriviaQuestionResponseDTO,
} from '../models/quiz.model';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  savedQuestions: TriviaQuestion[] = [];

  constructor(private http: HttpClient) {}

  getCategories(): Observable<TriviaCategory[]> {
    const categoriesUrl = 'https://opentdb.com/api_category.php';
    return this.http
      .get<TriviaCategoriesDTO>(categoriesUrl)
      .pipe(map((response) => response.trivia_categories));
  }

  getQuestions(
    category: string,
    difficulty: string
  ): Observable<TriviaQuestion[]> {
    const questionsUrl = `https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficulty}&type=multiple`;
    return this.http
      .get<TriviaQuestionResponseDTO>(questionsUrl)
      .pipe(
        map((response) =>
          response.results.map((item) => this.toTriviaQuestions(item))
        )
      );
  }

  private toTriviaQuestions(
    triviaQuestionDTO: TriviaQuestionDTO
  ): TriviaQuestion {
    const answers = [
      triviaQuestionDTO.correct_answer,
      ...triviaQuestionDTO.incorrect_answers,
    ];
    const answersShuffled = answers.sort(() => Math.random() - 0.5);

    return {
      question: triviaQuestionDTO.question,
      correctAnswer: triviaQuestionDTO.correct_answer,
      answers: answersShuffled,
    };
  }

  saveQuestions(questions: TriviaQuestion[]) {
    this.savedQuestions = questions;
  }

  loadQuestions(): TriviaQuestion[] {
    return this.savedQuestions;
  }

  hasQuestions(): boolean {
    return this.savedQuestions.length > 0;
  }

  resetQuestions() {
    this.savedQuestions = [];
  }
}
