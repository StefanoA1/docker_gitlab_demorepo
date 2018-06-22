import {MCQChoice} from './mcqchoice';
import {Question} from './question';
export class MCQQuestion {
  question: Question;
  answers: MCQChoice[];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
