import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../../Shared/Components/layout/header/header.component';
import { FooterComponent } from '../../../Shared/Components/layout/footer/footer.component';
import { LayoutComponent } from '../../../Shared/Components/layout/layout.component';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
  LayoutComponent,
  HeaderComponent,
  FooterComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    ToastrModule.forRoot({positionClass:'toast-bottom-right'}),
    ToastrModule,
  ],
  exports:[



  ]
})
export class SharedModule { }
