import { ApiService } from '../../api.service';
import { User } from '../../datamodel/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  flag: Boolean;
  user1: User;


  constructor(private router: Router, private api: ApiService) {
  }
  ngOnInit() {
    this.api.getAllUsers().subscribe(  data => {
          this.users = data;
      }
    );
  }

}
