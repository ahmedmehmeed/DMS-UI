import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiRoutes } from '../../Helpers/app/apiRoutes';
import { order } from '../../Models/Order/order';
import { orderFilter } from '../../Models/Order/orderFilter';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient){ }

  GetAllOrders(Filter:orderFilter){ 
    return this.http.post<order[]>(this.apiUrl+ApiRoutes.order.orders,Filter,{observe:'response'})
  }

  AddOrder(itemId:string){ 
    return this.http.post(this.apiUrl+ApiRoutes.order.addOrder+itemId,{})
  }
  

}
