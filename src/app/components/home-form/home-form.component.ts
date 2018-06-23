import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.css']
})
export class HomeFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToQuizes() {
    this.router.navigate(['quizes']);
  }

  goToQuestions() {
    this.router.navigate(['questions']);
  }
  goToUsers() {
    this.router.navigate(['users']);
  }

}
