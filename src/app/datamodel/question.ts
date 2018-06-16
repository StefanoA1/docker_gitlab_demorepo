export class Question {
  id: number;
  title: string;
  difficulty: number;
  tags: string[];

  constructor(id: number, title: string, difficulty: number, tags: string[] ) {
    this.id = id;
    this.title = title;
    this.difficulty = difficulty;
    this.tags = tags;

  }
}
