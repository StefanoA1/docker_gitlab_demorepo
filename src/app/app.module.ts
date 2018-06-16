import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import { router } from './app.routes';
import { QuestionFormComponent } from './components/question-form/question-form.component';
import { QuestionlistComponent } from './components/questionlist/questionlist.component';
import { QuestionService } from './services/question.service';
import { QuestionsSelectedComponent } from './components/questions-selected/questions-selected.component';
import { QuizFormComponent } from './components/quiz-form/quiz-form.component';
import { QuizService } from './services/quiz.service';



@NgModule({
  declarations: [
    AppComponent,
    QuestionlistComponent,
    QuestionFormComponent,
    QuestionsSelectedComponent,
    QuizFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    router
  ],
  providers: [
    QuestionService,
    QuizService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
