import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverMenuComponent } from 'src/app/components/popover-menu/popover-menu.component';
import { DataLocalService } from 'src/app/services/data-local.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private popoverController: PopoverController,
    public dataLocalService: DataLocalService) { }


  async openMenu(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverMenuComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  openRegistry(){
    console.log('OPEN');
  }

}
