import { MCQChoice } from '../datamodel/mcqchoice';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class QuestiontomcqdataService {
  private subject = new Subject<any>();
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

}
