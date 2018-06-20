import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthenticationService {

  // baseUrl: 'http://localhost:8080/home/';
  baseUrl: 'http://172.20.10.2:8080/quiz-manager-webapp/quiz-manager';

  constructor(private http: HttpClient) {
  }

  attemptAuthentication(ussername: string, password: string): Observable<any> {
    const credentials = {username: ussername, password: password};
    console.log('attempAuthentication for user ::');
    return this.http.post<any>('http://172.20.10.2:8080/quiz-manager-webapp/quiz-manager/auth', credentials);
    // return this.http.post<any>('http://localhost:8080/token/generate-token', credentials);
  }

}
