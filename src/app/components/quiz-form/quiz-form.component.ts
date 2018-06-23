import { Quiz } from '../../datamodel/quiz';
import { QuizService } from '../../services/quiz.service';
import { QuiztoeditService } from '../../services/quiztoedit.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.css']
})
export class QuizFormComponent implements OnInit {

  quizes: Quiz[];

  constructor(private quizService: QuizService, private ds: QuiztoeditService, private router: Router) { }

  ngOnInit() {
    // Initialize quizes
    this.quizes = [];
    this.quizService.getAllQuizes().subscribe(data => {
      this.quizes = data;
    });

  }


  editQuiz(quiz: Quiz) {
    this.router.navigate(['questions-selected']);
    this.quizService.getQuizById(quiz).subscribe(data => {
      this.ds.sendQuiz(quiz);
    });
  }

  createNewQuiz() {
    this.router.navigate(['questions-selected']);
  }

  deleteQuiz(quiz: Quiz, index: number) {
    this.quizService.deleteQuiz(quiz).subscribe(data => {
      this.quizes.splice(index, 1);
    });
  }

}
