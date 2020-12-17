import {Component, Input, OnInit} from '@angular/core';
import {User} from './entity/User';
import {ApiUsersService} from './services/api-users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test-technique';
  listUsers: User[] = [];
  user = new User();
  @Input() action = 'Add';
  index;

  constructor(private userService: ApiUsersService) {
  }

  ngOnInit(): void {
    this.LoadListUsersFromJson();
  }

  /*
  * @ToDo
  * */
  LoadListUsersFromJson() {
    this.userService.getAllUsers().subscribe(data => {
      this.user = new User();
      this.listUsers = data;
    }, ex => console.log(ex));
  }

  /*
  * @ToDo
  * */
  SaveListUsersInJson() {
    if (this.action === 'Add') {
      this.listUsers.push(this.user);
    } else {
      this.listUsers[this.index] = this.user;
      this.action = 'Add';
    }
    this.user = new User();

  }

  receiveUser(user: User) {
    this.user = user;
  }


  receiveUserFromUserCard(event: any) {
    Object.assign(this.user, event.user);
    this.action = event.action;
    this.index = event.index;
  }
}
