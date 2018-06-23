export class Question {
  id: number;
  title: string;
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
