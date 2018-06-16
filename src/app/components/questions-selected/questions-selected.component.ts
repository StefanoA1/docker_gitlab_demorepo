import { Question } from '../../datamodel/question';
import { QuestionService } from '../../services/question.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions-selected',
  templateUrl: './questions-selected.component.html',
  styleUrls: ['./questions-selected.component.css']
})
export class QuestionsSelectedComponent implements OnInit {

  available_questions: Question[];
  selected_questions: Question[];
  // question1: Question;
  constructor(private questionService: QuestionService, private router: Router) {}

  ngOnInit() {
    // this.question1 = new Question(6, 'what is Maven6?', 2, ['industrialization', 'project configuration']);
    this.available_questions = this.questionService.getAllQuestions();
    this.selected_questions = [];
    // this.selected_questions.push({id: 6, title: 'what is 6?', difficulty: 3, tags: ['i6', 'p6']});
  }

  goToQuestion() {
    // this.router.navigate(['questions-selected']);
    this.router.navigate(['form']);
  }

  putInSelected(question, i) {
    // console.log('1');
    // this.selected_questions.push(Object.assign({}, question));
    this.selected_questions.push(question);
    this.available_questions.splice(i, 1);
    // this.available_questions.push(this.question1);
  }

  putInAvailable(question, i) {
    this.available_questions.push(question);
    this.selected_questions.splice(i, 1);
  }

}
