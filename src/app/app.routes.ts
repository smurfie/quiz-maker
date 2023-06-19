import { Routes } from '@angular/router';
import { hasSavedQuestionsGuard } from './guards/has-saved-questions.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./quiz-maker/quiz-maker.component').then(
        (mod) => mod.QuizMakerComponent
      ),
  },
  {
    path: 'results',
    canActivate: [hasSavedQuestionsGuard],
    loadComponent: () =>
      import('./quiz-results/quiz-results.component').then(
        (mod) => mod.QuizResultsComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
