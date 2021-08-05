import { AngularFireDatabase } from '@angular/fire/database';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-recentreviews',
  templateUrl: './recentreviews.page.html',
  styleUrls: ['./recentreviews.page.scss'],
})
export class RecentreviewsPage implements OnInit {
  companies:Array<any> = []
  list:Array<any> = []
  recentReviews:Array<any> = []
  limit:number = 20;
  arr:Array<any> = [];
  items:Array<any> = [];
  searchText:string
  itemRef:any = this.db.database.ref('/companies');
  constructor(private db:AngularFireDatabase,
    private router:Router) { }

  ngOnInit() {

    this.db.list(`recentReviews`).valueChanges().subscribe(res =>{
      this.recentReviews = res
    })
  }
 
  itemClick(data){
    let navigationExtras: NavigationExtras = { state: { data: data, title: data.name, } };
    this.router.navigate(['/makeareview', { Animation: true }], navigationExtras);
  }
  filterItem(text) {
      
      this.companies.filter(res => {
        if (res.id && text) {
          if (res.id.toLowerCase().indexOf(text.toLowerCase()) > -1) {
            this.arr.push(res)
          }
        }
      });
    this.recentReviews = this.arr
    console.log(`recentReviews = ${JSON.stringify(this.recentReviews)}`)
  }

  searchFilterItem() {
    this.items = [];
    this.recentReviews.filter(res => {
      if (res.name && this.searchText) {
        if (res.name.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1) {
          this.items.push(res);
        }
      }
    });
  }
  findItem(data){
    return this.companies.some(o => o.id === data);
  }
}
