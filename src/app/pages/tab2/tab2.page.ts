import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverMenuComponent } from 'src/app/components/popover-menu/popover-menu.component';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public popoverController: PopoverController) {}


  async openMenu(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverMenuComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

}
