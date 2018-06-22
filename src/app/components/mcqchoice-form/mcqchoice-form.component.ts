import {MCQChoice} from '../../datamodel/mcqchoice';
import {QuestiontomcqdataService} from '../../services/questiontomcqdata.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-mcqchoice-form',
  templateUrl: './mcqchoice-form.component.html',
  styleUrls: ['./mcqchoice-form.component.css']
})
export class McqchoiceFormComponent implements OnInit {

  choice: string;
  correct: boolean;
  constructor(private ds: QuestiontomcqdataService) {}

  ngOnInit() {

  }

  saveToQuestion() {
    const mcqChoise = new MCQChoice({choice: this.choice, correct: this.correct});
    this.ds.sendMCQChoice(mcqChoise);
    this.choice = '';
    this.correct = false;
  }

}
