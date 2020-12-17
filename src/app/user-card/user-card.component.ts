import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../entity/User';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input()  listUsers:User[]=[];
  @Output() sendUser = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  remove(user: User) {
    this.listUsers = this.listUsers.filter(us=> us !== user);
  }
  plusEnfant(user: User) {

    const index = this.listUsers.findIndex(us => us === user);

    this.listUsers[index].nombre_enfants = Number(this.listUsers[index].nombre_enfants ) + 1;

  }

  minusEnfant(user: User) {
    const index = this.listUsers.findIndex(us => us === user);
    const result = Number(this.listUsers[index].nombre_enfants ) - 1;
    if (result>=0) {
      this.listUsers[index].nombre_enfants = result;
    }


  }

  selectUser(user: User, index) {
    this.sendUser.emit({user: user, action: 'Update', index: index});
  }
}
