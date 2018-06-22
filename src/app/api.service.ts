import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './datamodel/user';

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


  // API: POST /user
  public createUser(user: User) {
    return this.http.post<Boolean>(API_URL + '/create', user);
  }

 // API: POST /user
  public authUser(user: User) {
    return this.http.post<User>(API_URL + '/auth', user);
  }

/*
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


}
