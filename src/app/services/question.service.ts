import {Question} from '../datamodel/question';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {MCQChoice} from '../datamodel/mcqchoice';
import {MCQQuestion} from '../datamodel/mcqquestion';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const API_URL = environment.apiUrl;

@Injectable()
export class QuestionService {

  constructor(private http: HttpClient) {}



  getAllQuestions() {
    return this.http.get<Question[]>(API_URL + '/questions');

    // TODO replace this initialization by a real call to a service
    /*return [
      new Question(1, 'what is Maven 1?'),
      new Question(2, 'what is Hibernate'),
      new Question(3, 'what is Spring?'),
      new Question(4, 'what is Maven 4?'),
      new Question(5, 'what is Maven 5?')
    ];*/
  }

  createMCQQuestion(question: MCQQuestion) {
    return this.http.post<Boolean>(API_URL + '/questions/createMCQQuestion', question);
  }

  getQuestionMCQOptions(id: number) {
    return this.http.get<MCQChoice[]>(API_URL + '/questions/' + id);
  }
  updateMCQQuestion(question: MCQQuestion) {
    return this.http.post<Boolean>(API_URL + '/questions/updateMCQQuestion', question);
  }
  deleteMCQQuestion(question: Question) {
    return this.http.post<Boolean>(API_URL + '/questions/deleteMCQQuestion', question);
  }

}

