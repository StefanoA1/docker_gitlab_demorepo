import { Quiz } from '../datamodel/quiz';
import { Injectable } from '@angular/core';

@Injectable()
export class QuizService {

  constructor() { }

    getAllQuizes(): Quiz[] {
    // TODO replace this initialization by a real call to a service
    return [
      new Quiz(1, 'Maven Quiz', ['Q1', 'Q2']),
      new Quiz(2, 'Java Quiz', ['Q3', 'Q4']),
      new Quiz(3, 'Angular Quiz', ['Q5', 'Q6']),
      new Quiz(4, 'Spring Quiz', ['Q7', 'Q8']),
    ];
  }

}
