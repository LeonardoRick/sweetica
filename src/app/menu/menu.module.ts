import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { MenuComponent } from './menu.component';
import { MenuRoutingModule } from './menu-routing.module';



@NgModule({
  declarations: [ MenuComponent ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    SharedModule
  ],
})
export class MenuModule { }
