import { GlobalMethods } from './../services/global';
import { AngularFireDatabase } from '@angular/fire/database';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.page.html',
  styleUrls: ['./directory.page.scss'],
})
export class DirectoryPage implements OnInit {
  items:Array<any> = []
  searchText:string
  limit:number = 20;
  itemList:Array<any> = []
  loadeditemList:Array<any> = []
  backUpList:Array<any> = []


  itemRef:any = this.db.database.ref('/companies');
@ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

constructor(private db:AngularFireDatabase,
  private router:Router,
  private global:GlobalMethods) {
 
}
  ngOnInit(){
   
    this.itemRef.limitToFirst(this.limit).once('value', itemList => {
      let items = [];
      itemList.forEach( item => {
        items.push(item.val());
        return false;
      });
      this.itemList = items;
      this.loadeditemList = items;
      // console.log(JSON.stringify(this.loadeditemList))
    });

    this.db.list(`companies`).valueChanges().subscribe(res =>{
      // this.items = res
      this.backUpList = res
    })
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();
      this.limit += 20; // or however many more you want to load
      this.itemRef.limitToFirst(this.limit).once('value', itemList => {
        let items = [];
        itemList.forEach( item => {
          items.push(item.val());
          return false;
        });

        this.itemList = items;
        this.loadeditemList = items;
        console.log(JSON.stringify(this.loadeditemList))
      });
      // if (data.length == 1000) {
      //   event.target.disabled = true;
      // }
    }, 500);
  }

  searchFilterItem() {
    this.items = []
    this.backUpList.filter(res => {
      if (res.name && this.searchText) {
        if (res.name.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1) {
          this.items.push(res);
        }
      }
    });
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  itemClick(data){
    let navigationExtras: NavigationExtras = { state: { data: data, title: data.name, } };
    this.router.navigate(['/makeareview', { Animation: true }], navigationExtras);
  }

}
