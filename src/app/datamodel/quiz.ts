export class Quiz {
  id: number;
  title: string;
  questions:  Array<string>;

  constructor(id: number, title: string, questions:  Array<string> ) {
    this.id = id;
    this.title = title;
    this.questions = questions;

  }
}
