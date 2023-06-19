import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TriviaQuestion } from '../models/quiz.model';
import { QuizQuestionsComponent } from '../quiz-questions/quiz-questions.component';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-quiz-results',
  standalone: true,
  imports: [QuizQuestionsComponent, NgClass],
  templateUrl: './quiz-results.component.html',
  styleUrls: ['./quiz-results.component.css'],
})
export class QuizResultsComponent implements OnInit {
  questions: TriviaQuestion[] = [];
  correctAnswers = 0;

  constructor(private quizService: QuizService, private router: Router) {}

  ngOnInit() {
    this.questions = this.quizService.loadQuestions();
    this.correctAnswers = this.questions.filter(
      (question) => question.correctAnswer === question.selectedAnswer
    ).length;
  }

  onNewQuiz() {
    this.quizService.resetQuestions();
    this.router.navigate(['/']);
  }
}
