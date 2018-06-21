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


  constructor(private router: Router, private api: ApiService) {
  }
  ngOnInit() {
    this.api.getAllUsers().subscribe(  data => {
          this.users = data;
      }
    );
  }

}
