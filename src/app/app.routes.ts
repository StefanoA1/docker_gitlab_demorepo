import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import { QuestionFormComponent } from './components/question-form/question-form.component';
import { QuestionlistComponent } from './components/questionlist/questionlist.component';
import { QuestionsSelectedComponent } from './components/questions-selected/questions-selected.component';
import { QuizFormComponent } from './components/quiz-form/quiz-form.component';

import { Question } from './datamodel/question';
import { QuestionToken } from 'typescript';
import { Quiz } from './datamodel/quiz';
// import { QuizToken } from 'typescript';

const appRoutes: Routes = [
  {path: 'form', component: QuestionFormComponent},
  {path: '', component: QuestionlistComponent},
  {path: 'questions', component: QuestionlistComponent},
  {path: 'questions-selected', component: QuestionsSelectedComponent},
  {path: 'quizes', component: QuizFormComponent}


];


export const router = RouterModule.forRoot(appRoutes);
