import { Question } from './question';
export class MCQChoice {
  id: number;
  choice: String;
  correct: Boolean;
  question: Question;
  constructor(values: Object = {}){
    Object.assign(this, values);
  }
}
