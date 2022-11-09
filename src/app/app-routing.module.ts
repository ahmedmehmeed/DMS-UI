import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../Shared/Components/layout/layout.component';
import { AuthGuard } from '../Shared/Helpers/guards/auth.guard';
import { content } from '../Shared/Routes/loadingModules';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: content,
/*      canActivate: [AuthGuard],   */
  }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
