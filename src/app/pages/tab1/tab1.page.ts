import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  tipo: string = '';

  constructor( private barcodeScanner: BarcodeScanner ) {}

  scanCode(){

    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);

      if ( !barcodeData.cancelled ) {
        this.tipo = barcodeData.format;
      }

     }).catch(err => {
      console.log('Error', err);

     });

  }

}
