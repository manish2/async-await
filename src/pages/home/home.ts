import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
    apple: any;
    banana: any;
 
    constructor(public navCtrl: NavController, public storage: Storage) {
 
    }
 
    ionViewDidLoad(){
        this.getFromStorageStandard().then((result) => {
            this.apple = result;
        });
        this.banana = this.getFromStorageAsync();
    }
 
    setInStorage(){
        this.storage.set('apple', '3.99');
        this.storage.set('banana', '4.50');
    }
 
    getFromStorageStandard(){
 
        return this.storage.get('apple');
 
    }
 
    async getFromStorageAsync() {
        console.log("getting banana from local storage asynchronously");        
        return await this.storage.get('banana');
 
    }
 
}