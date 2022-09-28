import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private userService: UsersService){

    this.userService.getUsers()
      .subscribe({
        next: resp => {
          console.log('aaaa',resp);
        },
        error: (err:HttpErrorResponse) => {
          console.error('APP.COMPONENT -> ', err);
        }
      });
      
  }

}
