import { Quiz } from '../datamodel/quiz';
import { Injectable } from '@angular/core';

@Injectable()
export class QuizService {

  constructor() { }

    getAllQuizes(): Quiz[] {
    // TODO replace for actual Quiz service
    return [
      new Quiz(1, 'Maven Quiz', ['1', '1']),
      new Quiz(2, 'Java Quiz', ['3', '4']),
      new Quiz(3, 'Angular Quiz', ['5', '6']),
      new Quiz(4, 'Spring Quiz', ['7', '8']),
    ];
  }

}
