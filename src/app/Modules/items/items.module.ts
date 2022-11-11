import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ProductComponent } from './product/product.component';
import { SharedModule } from '../sharedModule/shared.module';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    SharedModule,
    ToastrModule.forRoot({positionClass:'toast-top-right'}),
  ]
})
export class ItemsModule { }
