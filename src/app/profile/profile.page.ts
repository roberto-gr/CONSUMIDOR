import { Router } from '@angular/router';
import { GlobalMethods } from './../services/global';
import { AuthServiceService } from './../services/auth-service.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  dark:boolean = false
  userData: any = {}
  constructor(private db: AngularFireDatabase,
    private authService: AuthServiceService,
    public global:GlobalMethods,
    private router:Router,
    private component:AppComponent
  ) { 
    
  }

  ngOnInit() {
    this.authService.userId().subscribe(user => {
      this.db.object(`users/${user.uid}`).valueChanges().subscribe(res =>{
        this.userData = res
      })
    })
  }
  reviewHistory(){
    this.router.navigate(['/review-history'])
  }
  darkMode() {
    if (this.dark) {
      this.dark = false
      this.component.dark = false
      localStorage.setItem('dark', 'false')
    } else {
      this.dark = true
      this.component.dark = true
      localStorage.setItem('dark', 'true')

    }
  }
  logout(){
    this.authService.logoutUser()
  }
}
