import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../Shared/Components/layout/layout.component';;
import { content } from '../Shared/Routes/loadingModules';
import { ErrorComponent } from './Modules/authentication/error/error.component';


const routes: Routes = [
 {
    path: "",
    component: LayoutComponent,
    children: content, 
  }, 


  {
    path: "**",
    component: ErrorComponent,
    pathMatch: "full",
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
