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
import { AuthenticationService } from './services/authentication.service';
import { Interceptor } from './services/interceptor';
import { TokenStorage } from './services/token.storage';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    QuestionlistComponent,
    QuestionFormComponent,
    QuestionsSelectedComponent,
    QuizFormComponent,
    LoginFormComponent,
    HomeFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    router
  ],
  providers: [
    QuestionService,
    QuizService,
    AuthenticationService,
    TokenStorage,
    {provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
