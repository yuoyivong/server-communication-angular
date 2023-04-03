import { Component, OnInit } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  users!: Observable<any>;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.fetchAllUsers().pipe(
      tap((a: any) => {
        return a.payload;
      }),
      catchError((err) => {
        return new Observable();
      })
    );
    console.log(this.users);
  }

  sendTestUser() {
    this.userService.createUser({
      username: 'dayan1',
      email: 'eam.dayan1@gmail.com',
      telephone: '089123124',
      profile: 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png',
      roles: ['TEACHER'],
    });
    // .subscribe((res) => {
    //   console.log(res);
    //   this.userService.fetchAllUsers().subscribe((res) => {
    //     console.log(res.message);
    //     this.users = res.payload;
    //   });
    // });
  }
}
