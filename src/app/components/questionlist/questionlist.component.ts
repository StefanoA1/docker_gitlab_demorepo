import {Question} from '../../datamodel/question';
import {QuestionService} from '../../services/question.service';
import {QuestiontomcqdataService} from '../../services/questiontomcqdata.service';
import {Component, OnInit} from '@angular/core';
import {RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-questionlist',
  templateUrl: './questionlist.component.html',
  styleUrls: ['./questionlist.component.css']
})
export class QuestionlistComponent implements OnInit {

  questions: Question[];
  constructor(private questionService: QuestionService, private router: Router, private ds: QuestiontomcqdataService) {}

  ngOnInit() {
    // initialize "questions"
    this.questionService.getAllQuestions().subscribe(data => {
      this.questions = data;
    });
  }

  goToQuestion() {
    this.router.navigate(['questions-selected']);
    // this.router.navigate(['form']);
  }

  editQuestion(question: Question) {
    this.router.navigate(['new-question']);
    this.questionService.getQuestionMCQOptions(question.id).subscribe(data => {
      this.ds.sendQuestion(question, data);
    });
  }

  deleteQuestion(question: Question, index: number) {
    this.questionService.deleteMCQQuestion(question).subscribe(data => {
      this.questions.splice(index, 1);
    });
  }

}
