import {Question} from '../datamodel/question';
import {Injectable} from '@angular/core';

@Injectable()
export class QuestionService {

  constructor() {}

  getAllQuestions(): Question[] {
    // TODO replace this initialization by a real call to a service
    return [
      new Question(1, 'what is Maven 1?', 1, ['industrialization', 'project configuration']),
      new Question(2, 'what is Hibernate', 1, ['data access', 'orm', 'frameworks', 'java']),
      new Question(3, 'what is Spring?', 1, ['program configuration', 'frameworks', 'dependency injection']),
      new Question(4, 'what is Maven 4?', 1, ['industrialization4', 'project configuration']),
      new Question(5, 'what is Maven 5?', 1, ['industrialization', 'project configuration'])
    ];
  }

}

