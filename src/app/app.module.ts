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
import { LoginFormComponent } from './components/login-form/login-form.component';
import { HomeFormComponent } from './components/home-form/home-form.component';
import { CustomMaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    QuestionlistComponent,
    QuestionFormComponent,
    QuestionsSelectedComponent,
    QuizFormComponent,
    LoginFormComponent,
    HomeFormComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    HttpClientModule,
    router
  ],
  providers: [
    QuestionService,
    QuizService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
