import { Quiz } from '../../datamodel/quiz';
import { QuizService } from '../../services/quiz.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.css']
})
export class QuizFormComponent implements OnInit {

  quizes: Quiz[];

  constructor(private quizService: QuizService, private router: Router) { }

  ngOnInit() {
    // Initialize quizes
    this.quizes = this.quizService.getAllQuizes();
  }

   editQuiz() {
    this.router.navigate(['questions-selected']);
    // this.router.navigate(['form']);
  }

}
