import {MCQChoice} from '../datamodel/mcqchoice';
import {Question} from '../datamodel/question';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class QuestiontomcqdataService {
  private subject = new Subject<any>();
  private listSubject = new Subject<any>();
  constructor() {}

  sendMCQChoice(mcqOption: MCQChoice) {
    this.subject.next(mcqOption);
  }

  clearData() {
    this.subject.next();
  }

  getData(): Observable<any> {
    return this.subject.asObservable();
  }

  getQuestionData(): Observable<any> {
    return this.listSubject.asObservable();
  }

  sendQuestion(question: Question, mcqChoices: MCQChoice[]) {
    this.listSubject.next({question: question, answers: mcqChoices});
  }
}
