import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material';
// import { CustomMaterialModule } from '@angular/material.module';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor( private router: Router, public dialog: MatDialog ) {
  }

  username: string;
  password: string;

  login(): void {
    if ( this.username === 'admin' && this.password === 'admin' ) {
     this.router.navigate(['user']);
    } else {
      alert('Invalid credentials');
    }
  }

  ngOnInit() {
  }

}
