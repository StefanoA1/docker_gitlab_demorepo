import {MCQChoice} from '../../datamodel/mcqchoice';
import {Question} from '../../datamodel/question';
import {QuestiontomcqdataService} from '../../services/questiontomcqdata.service';
import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {
  question: Question;
  subscription: Subscription;
  mcqOptionsAdded: MCQChoice[];
  showMcqForm: boolean;

  constructor(private router: Router, private ds: QuestiontomcqdataService) {
    this.subscription = this.ds.getData().subscribe(x => {
      this.mcqOptionsAdded.push(x);
      this.showMcqForm = false;
    });
    this.showMcqForm = false;
    this.mcqOptionsAdded = [];
  }

  ngOnInit() {
    //this.question = new Question(0, 'test', 1, ['']);
  }

  validate() {
    this.router.navigate(['questions']);
  }
  displayForm() {
    this.showMcqForm = true;
  }
}
