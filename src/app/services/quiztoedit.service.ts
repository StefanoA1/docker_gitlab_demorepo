import { Question } from '../datamodel/question';
import { Quiz } from '../datamodel/quiz';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class QuiztoeditService {
  private subject = new Subject<any>();
  private listSubject = new Subject<any>();

  constructor() { }

  sendQuiz(currentQuiz: Quiz) {
    this.subject.next(currentQuiz);
  }

  clearData() {
    this.subject.next();
  }

  getData(): Observable<any> {
    return this.subject.asObservable();
  }

  getQuizData(): Observable<any> {
    return this.listSubject.asObservable();
  }
/*
  sendQuestion(quiz: Quiz, questions: Question[]) {
    this.listSubject.next({quiz: quiz, questionList: questions});
  }
*/
}
