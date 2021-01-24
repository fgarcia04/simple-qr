import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverMenuComponent } from './popover-menu/popover-menu.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    PopoverMenuComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    PopoverMenuComponent
  ]
})
export class ComponentsModule { }
