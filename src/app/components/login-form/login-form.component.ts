import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../api.service';
import {User} from '../../datamodel/user';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
// import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog, private api: ApiService) {
  }

  username: string;
  password: string;
  user: User;
  userBack: User;

  ngOnInit() {
    this.user = new User();
  }

  login(): void {

    this.user.username = this.username;
    this.user.password = this.password;
    this.api.authUser(this.user).subscribe(data => {
      this.userBack = data;
      if (this.userBack !== null && this.username === this.userBack.username && this.password === this.userBack.password) {
        this.router.navigate(['users']);
      } else {
        alert('Invalid credentials');
      }
    }
    );
  }

  goToCreateUser() {
    this.router.navigate(['create-user']);
  }

}
