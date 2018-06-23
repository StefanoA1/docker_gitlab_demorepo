import { environment } from '../../environments/environment';
import { Question } from '../datamodel/question';
import { Quiz } from '../datamodel/quiz';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL = environment.apiUrl;

@Injectable()
export class QuizService {

  constructor(private http: HttpClient) { }

    public getAllQuizes() {
      return this.http.get<Quiz[]>(API_URL + '/quizzes');
  }
    public getOtherQuestions(id: number) {
      return this.http.get<Question[]>(API_URL + '/quizzes/except' + id);
  }
    public createQuiz(quiz: Quiz) {
      return this.http.post<Boolean>(API_URL + '/quizzes/create', quiz);
  }
    public updateQuiz(quiz: Quiz) {
      return this.http.post(API_URL + '/quizzes/update', quiz);
  }
    public getQuizById(quiz: Quiz) {
      return this.http.post<Quiz>(API_URL + '/quizzes/byid', quiz);
  }
    public deleteQuiz(quiz: Quiz) {
      return this.http.post<Boolean>(API_URL + '/quizzes/delete', quiz);
  }

}
