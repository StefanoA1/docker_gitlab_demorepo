import {ApiService} from '../../api.service';
import {User} from '../../datamodel/user';
import {Component, OnInit} from '@angular/core';
// import {MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  name: string;
  username: string;
  password: string;
  userType: string;
  passwordConfirm: string;


  constructor(private router: Router, private api: ApiService) {
  }
  ngOnInit() {
    this.name = '';
    this.username = '';
    this.password = '';
    this.userType = 'STUDENT';
    this.passwordConfirm = '';
  }

  createUser() {
    if (this.password !== null && this.password === this.passwordConfirm) {
      const user = new User({
        username: this.username,
        name: this.name,
        password: this.password,
        userType: this.userType
      });
      this.api.createUser(user).subscribe(data => {
        if (data === true) {
          this.router.navigate(['login']);
        } else {
          alert('There was an error on the server side');
        }
      });
    } else {
      alert('Password and Password confirmation dont match');
    }
  }

}
