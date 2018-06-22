import { ApiService } from '../../api.service';
import { User } from '../../datamodel/user';
import { Component, OnInit } from '@angular/core';
// import {MatTableDataSource} from '@angular/material';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  users: User[];
  flag: Boolean;
  user1: User;


  constructor(private router: Router, private api: ApiService) {
  }
  ngOnInit() {
    this.user1 = new User();
    this.user1.name = 'PEPE';
    this.user1.username = 'PEPE';
    this.user1.password = 'PEPE';
    this.user1.userType = 'ADMIN';
    this.api.createUser(this.user1).subscribe(data => {
      this.flag = data;
    }
    );
    this.api.getAllUsers().subscribe(  data => {
          this.users = data;
      }
    );
  }

}
