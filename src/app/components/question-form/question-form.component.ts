import {MCQChoice} from '../../datamodel/mcqchoice';
import {MCQQuestion} from '../../datamodel/mcqquestion';
import {Question} from '../../datamodel/question';
import {QuestionService} from '../../services/question.service';
import {QuestiontomcqdataService} from '../../services/questiontomcqdata.service';
import {Component, OnInit, ViewChild, ElementRef, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit, OnDestroy {
  isEdit: Boolean;
  mcqFormSubscription: Subscription;
  questionListSubscription: Subscription;
  mcqOptionsAdded: MCQChoice[];
  showMcqForm: boolean;
  questionTitle: string;
  question: Question;

  constructor(private router: Router, private ds: QuestiontomcqdataService, private questionService: QuestionService) {

  }

  ngOnInit() {
    this.showMcqForm = false;
    this.mcqOptionsAdded = [];
    this.isEdit = false;
    if (this.questionListSubscription == null) {
      this.questionListSubscription = this.ds.getQuestionData().subscribe(x => {
        this.mcqOptionsAdded = x.answers;
        this.questionTitle = x.question.title;
        this.isEdit = true;
        this.question = x.question;
      });
    }
    if (this.mcqFormSubscription == null) {
      this.mcqFormSubscription = this.ds.getData().subscribe(x => {
        this.mcqOptionsAdded.push(x);
        this.showMcqForm = false;
      });
    }

  }

  ngOnDestroy() {
    this.mcqFormSubscription.unsubscribe();
    this.questionListSubscription.unsubscribe();
  }

  save() {
    if (this.isEdit) {
      this.question.title = this.questionTitle;
      this.questionService.updateMCQQuestion(new MCQQuestion({question: this.question, answers: this.mcqOptionsAdded})).subscribe(data => {
        this.router.navigate(['questions']);
        this.ds.clearData();
      });
    } else {
      const question = new Question({title: this.questionTitle});
      const mcqQuestion = new MCQQuestion({question: question, answers: this.mcqOptionsAdded});
      this.questionService.createMCQQuestion(mcqQuestion).subscribe(data => {
        this.router.navigate(['questions']);
        this.ds.clearData();
      });
    }
  }
  displayForm() {
    this.showMcqForm = true;
  }
  deleteMcqOption(index: number) {
    this.mcqOptionsAdded.splice(index, 1);
  }
}
