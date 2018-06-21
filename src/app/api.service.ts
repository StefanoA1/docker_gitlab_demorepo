import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './datamodel/user';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient
  ) {

  }
  // API: GET /users API_URL
  public getAllUsers() {
    return this.http.get<User[]>(API_URL + '/users');
  }
  
//  public getAllUsers(): Observable<User[]> {
//  return this.http
//    .get('http://10.41.176.204:8080/quiz-manager-webapp/quiz-manager' + '/users')
//    .map(response => {
//      const users = response.json();
//      return users.map((user) => new User(user));
//    })
//    .catch(this.handleError);
//  }
/*
  // API: POST /todos
  public createTodo(todo: Todo) {
    // will use this.http.post()
  }

  // API: GET /todos/:id
  public getTodoById(todoId: number) {
    // will use this.http.get()
  }

  // API: PUT /todos/:id
  public updateTodo(todo: Todo) {
    // will use this.http.put()
  }

  // DELETE /todos/:id
  public deleteTodoById(todoId: number) {
    // will use this.http.delete()
  }
*/
//  private handleError (error: Response | any) {
//    console.error('ApiService::handleError', error);
//    return Observable.throw(error);
//  }

}
