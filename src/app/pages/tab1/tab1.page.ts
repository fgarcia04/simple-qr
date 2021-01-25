import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { DataLocalService } from 'src/app/services/data-local.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  tipo: string = '';

  constructor(private barcodeScanner: BarcodeScanner,
    private dataLocalService: DataLocalService) { }

  scanCode() {
    console.log(this.dataLocalService.saved);
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);

      if (!barcodeData.cancelled) {
        this.tipo = barcodeData.format;

        this.dataLocalService.saveRegistry(barcodeData.format, barcodeData.format);
      }

    }).catch(err => {
      this.dataLocalService.saveRegistry('QR', 'https://mundoazulgrana.com.ar/sanlorenzo/');
      console.log('Error', err);

    });

  }

}
