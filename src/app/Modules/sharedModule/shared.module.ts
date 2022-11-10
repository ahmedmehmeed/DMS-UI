import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../../Shared/Components/layout/header/header.component';
import { FooterComponent } from '../../../Shared/Components/layout/footer/footer.component';
import { LayoutComponent } from '../../../Shared/Components/layout/layout.component';
import { ToastrModule } from 'ngx-toastr';
import { AlertModule} from 'ngx-bootstrap/alert';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
  LayoutComponent,
  HeaderComponent,
  FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ToastrModule.forRoot({positionClass:'toast-bottom-right'}),
    ToastrModule,
    AlertModule.forRoot(),
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    NgbModule
  ],
  exports:[
    ToastrModule,
    AlertModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    NgbModule,
  ]
})
export class SharedModule { }
