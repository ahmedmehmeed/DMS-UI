import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from '../../../Shared/Helpers/app/appRoutes';
import { AuthGuard } from '../../../Shared/Helpers/guards/auth.guard';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: appRoutes.items.sub,
        component: ProductComponent,
        pathMatch: "full",
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
