import {Question} from './question';
export class Quiz {
  id: number;
  name: string;
  questionList: Array<Question>;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
