import { AngularFireAuth } from '@angular/fire/auth';
import { GlobalMethods } from './global';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private db: AngularFireDatabase,
    private global: GlobalMethods,
    private fbAuth: AngularFireAuth) {
  }

  updateUser(value) {
    return new Promise<any>((resolve, reject) => {
      this.db.database.ref(`users`).child(value.uid).update(value)
        .then(
          res => {
            resolve(res)
            console.log(`userUpdated`)
            // this.global.CreateToast(res['message'])
          }
        ).catch((err) => {
          reject(err)
        })
    })
  }

  fetchList() {
    return this.db.list(`${localStorage.getItem('lang')}`).valueChanges();
  }
  fetchListGlobal(path) {
    return this.db.list(`${path}`).valueChanges();
  }
  addCategory(ref: string, path: string, params) {
    return new Promise<any>((resolve, reject) => {
      this.db.database.ref(`${localStorage.getItem('lang')}/${ref}`).child(path).update(params)
        .then(
          res => {
            resolve(res)
            console.log(`dataIsUploaded`)
            // this.global.CreateToast(res['message'])
          }
        ).catch((err) => {
          reject(err)
        })
    })
  }

  pushCategory(ref: string, path: string, params) {
    return new Promise<any>((resolve, reject) => {
      this.db.database.ref(`${localStorage.getItem('lang')}/${ref}`).child(path).push(params)
        .then(
          res => {
            resolve(res)
            console.log(`dataIsUploaded`)
            // this.global.CreateToast(res['message'])
          }
        ).catch((err) => {
          reject(err)
        })
    })

  }
  pushCategoryGlobal(ref: string, path: string, params) {
    return new Promise<any>((resolve, reject) => {
      this.db.database.ref(`${ref}`).child(path).push(params)
        .then(
          res => {
            resolve(res)
            console.log(`dataIsUploaded`)
            // this.global.CreateToast(res['message'])
          }
        ).catch((err) => {
          reject(err)
        })
    })

  }

  unFav(uid: string, params) {
    return new Promise<any>((resolve, reject) => {
      this.db.database.ref(`favourites`).child(uid).orderByChild('catId').equalTo(params.catId).once("child_added", snapshot => {
        snapshot.ref.remove()
        this.global.CreateToast(`Removed from favourites!`)
      })
    })

  }

  getCurrentUser() {
    return this.fbAuth.currentUser
  }

}
