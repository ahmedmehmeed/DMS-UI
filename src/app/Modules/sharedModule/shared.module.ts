import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../../Shared/Components/layout/header/header.component';
import { FooterComponent } from '../../../Shared/Components/layout/footer/footer.component';
import { LayoutComponent } from '../../../Shared/Components/layout/layout.component';


@NgModule({
  declarations: [
  LayoutComponent,
  HeaderComponent,
  FooterComponent

  ],
  imports: [
    CommonModule,
    RouterModule,

  ],
  exports:[



  ]
})
export class SharedModule { }
