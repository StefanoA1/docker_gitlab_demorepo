import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import { HomeFormComponent } from './components/home-form/home-form.component';
import { QuestionFormComponent } from './components/question-form/question-form.component';
import { QuestionlistComponent } from './components/questionlist/questionlist.component';
import { QuestionsSelectedComponent } from './components/questions-selected/questions-selected.component';
import { QuizFormComponent } from './components/quiz-form/quiz-form.component';

import { Question } from './datamodel/question';
import { QuestionToken } from 'typescript';
import { Quiz } from './datamodel/quiz';
import { LoginFormComponent } from './components/login-form/login-form.component';
// import { QuizToken } from 'typescript';

const appRoutes: Routes = [
  {path: 'new-question', component: QuestionFormComponent},
  {path: '', component: QuestionlistComponent},
  {path: 'questions', component: QuestionlistComponent},
  {path: 'questions-selected', component: QuestionsSelectedComponent},
  {path: 'login', component: LoginFormComponent},
  // {path: '', component: LoginFormComponent},
  {path: 'quizes', component: QuizFormComponent},
  {path: 'home', component: HomeFormComponent}


];


export const router = RouterModule.forRoot(appRoutes);
