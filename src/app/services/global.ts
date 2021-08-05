import { ToastController, AlertController, LoadingController, ModalController } from '@ionic/angular';
import { Component } from '@angular/core';


@Component({
  selector: 'app-providers',
  template: ''
})

export class GlobalMethods {
  constructor(public toast: ToastController,
    public alertCtlr: AlertController,
    public loadingController: LoadingController,
    public modalController:ModalController,) { 
      let _dark = localStorage.getItem('dark')
      if (_dark == 'false') {
        this.dark = false
      } else {
        this.dark = true
      }
     }
  dark :boolean = false ;
  isLoading: any = false;
  navigator:any;
  path:any;
  currentModal;
  notificationCount:number
  founder:boolean = false;
     side:string
     userProfile :any = {}

  public async CreateToast(msg) {
    const toast = await this.toast.create({
      message: msg,
      duration: 500,
      position: 'top',
    });
    toast.present();
  }

  async alertController(msg: any) {
    let alert = this.alertCtlr.create({
      message: msg,
      mode: 'ios',
      cssClass:'my-custom-alert',
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          handler: () => {
            console.log('Alert.canceled.')
          }
        }
      ]
    });
    ((await alert).present())
  }
  async presentModal(page:any,data:any) {
    const modal = await this.modalController.create({
      component: page,
      mode:'ios',
      swipeToClose: true,
      componentProps: { data: data }
    });
    this.currentModal = modal;
    return await modal.present();
  }

  async presentLoading(msg:any) {
    const check = await this.loadingController.getTop();
    if (check) {
      this.loadingController.dismiss();
    }
    const loading = await this.loadingController.create({
      message: msg,
      cssClass: 'loader-dir',
      spinner: 'bubbles'
    });
    loading.present();
  }
  async hideLoading() {
    this.loadingController.dismiss();
   }
  async timeoutHide(time:number) {
    setTimeout(async () => {
      const check = await this.loadingController.getTop();
      if (check) {
        this.loadingController.dismiss();
      }
    }, time);
  }
  setLanguage(setLang) {
    localStorage.setItem('lang', setLang);
    // this.translate.use(setLang)
}
}
