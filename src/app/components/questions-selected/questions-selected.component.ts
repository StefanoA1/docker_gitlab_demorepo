import {Question} from '../../datamodel/question';
import {Quiz} from '../../datamodel/quiz';
import { QuestionService } from '../../services/question.service';
import {QuizService} from '../../services/quiz.service';
import {QuiztoeditService} from '../../services/quiztoedit.service';
import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-questions-selected',
  templateUrl: './questions-selected.component.html',
  styleUrls: ['./questions-selected.component.css']
})
export class QuestionsSelectedComponent implements OnInit, OnDestroy {

  isEdit: Boolean;
  currentQuizSubscription: Subscription;

  quizTitle: string;
  available_questions: Question[];
  selected_questions: Question[];
  quiz: Quiz;

  // question1: Question;
  constructor(private quizService: QuizService, private questionService: QuestionService,
    private ds: QuiztoeditService, private router: Router) {}

  ngOnInit() {

    this.isEdit = false;
    this.available_questions = [];
    this.selected_questions = [];
    if (this.currentQuizSubscription == null) {
      this.currentQuizSubscription = this.ds.getData().subscribe(x => {
        this.quizTitle = x.quiz.title;
        this.isEdit = true;
        this.quiz = x.quiz;
      });
    }
    if (this.quiz.id != null) {
      this.quizService.getOtherQuestions(this.quiz.id).subscribe(data => {
        this.available_questions = data;
      });

    } else {
      this.questionService.getAllQuestions().subscribe(data => {
      this.available_questions = data;
    });
    }


    this.selected_questions = this.quiz.questions;

  }

  ngOnDestroy() {
    this.currentQuizSubscription.unsubscribe();
  }

  createQuiz() {

    this.quiz.questions = this.selected_questions;
    if (this.isEdit) {
      this.quiz.title = this.quizTitle;
      this.quizService.updateQuiz(this.quiz).subscribe(data => {
        this.router.navigate(['quizes']);
        this.ds.clearData();
      });
    } else {
      const quiz = new Quiz(null, this.quizTitle, null);
      this.quizService.createQuiz(quiz).subscribe(data => {
        this.router.navigate(['quizes']);
        this.ds.clearData();
      });
    }
  }

  putInSelected(question, i) {
    // console.log('1');
    this.selected_questions.push(question);
    this.available_questions.splice(i, 1);
  }

  putInAvailable(question, i) {
    this.available_questions.push(question);
    this.selected_questions.splice(i, 1);
  }

}
