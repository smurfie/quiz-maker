import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../services/quiz.service';

export const hasSavedQuestionsGuard = () => {
  const router = inject(Router);
  const quizService = inject(QuizService);
  return quizService.hasQuestions() || router.navigate(['/']);
};
