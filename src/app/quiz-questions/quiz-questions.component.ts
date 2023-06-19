import { NgClass, NgFor } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TriviaQuestion } from '../models/quiz.model';

@Component({
  selector: 'app-quiz-questions',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.css'],
})
export class QuizQuestionsComponent implements OnInit {
  @Input() questions: TriviaQuestion[] = [];
  @Input() showResults = false;

  @Output() completed = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  selectAnswer(iQuestion: number, iAnswer: number) {
    if (!this.showResults) {
      const question = this.questions[iQuestion];
      question.selectedAnswer = question.answers[iAnswer];

      if (
        this.questions.filter((question) => !question.selectedAnswer).length ===
        0
      ) {
        this.completed.emit();
      }
    }
  }
}
