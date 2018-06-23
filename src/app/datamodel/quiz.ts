import { Question } from './question';
export class Quiz {
  id: number;
  title: string;
  questions:  Array<Question>;

  constructor(id: number, title: string, questions:  Array<Question> ) {
    this.id = id;
    this.title = title;
    this.questions = questions;

  }
}
