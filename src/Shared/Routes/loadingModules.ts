import { Routes } from "@angular/router";
import { appRoutes } from "../Helpers/app/appRoutes";

export const content: Routes = [
     {
        path: appRoutes.items.full,
        loadChildren: () => import("../../app/Modules/items/items.module").then((m) => m.ItemsModule), 
     },
     {
        path: appRoutes.Authentication.full,
        loadChildren: () => import("../../app/Modules/authentication/authentication.module").then((m) => m.AuthenticationModule), 
     },
     {
      path: appRoutes.orders.full,
      loadChildren: () => import("../../app/Modules/orders/orders.module").then((m) => m.OrdersModule), 
     }
];
