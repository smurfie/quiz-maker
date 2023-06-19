import { AsyncPipe, NgFor, NgIf, TitleCasePipe } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import {
  TriviaCategory,
  TriviaDifficulty,
  TriviaQuestion,
} from '../models/quiz.model';
import { QuizQuestionsComponent } from '../quiz-questions/quiz-questions.component';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-quiz-maker',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgFor,
    NgIf,
    TitleCasePipe,
    AsyncPipe,
    QuizQuestionsComponent,
  ],
  templateUrl: './quiz-maker.component.html',
  styleUrls: ['./quiz-maker.component.css'],
})
export class QuizMakerComponent implements OnDestroy {
  quizForm = this.fb.group({
    category: [''],
    difficulty: [''],
  });

  categories$?: Observable<TriviaCategory[]>;

  questionsSubscription?: Subscription;
  questions?: TriviaQuestion[];

  difficulties: TriviaDifficulty[] = [];

  quizCompleted = false;

  constructor(
    private fb: FormBuilder,
    private quizService: QuizService,
    private router: Router
  ) {}

  ngOnInit() {
    this.categories$ = this.quizService.getCategories();
    this.difficulties = [
      TriviaDifficulty.EASY,
      TriviaDifficulty.MEDIUM,
      TriviaDifficulty.HARD,
    ];
  }

  onCreate() {
    const category = this.quizForm.value.category;
    const difficulty = this.quizForm.value.difficulty;
    if (category && difficulty) {
      this.questionsSubscription = this.quizService
        .getQuestions(category, difficulty)
        .subscribe((questions) => (this.questions = questions));
    }
  }

  onQuizCompleted() {
    this.quizCompleted = true;
  }

  onSubmit() {
    this.quizService.saveQuestions(this.questions || []);
    this.router.navigate(['results']);
  }

  ngOnDestroy() {
    this.questionsSubscription?.unsubscribe();
  }
}
