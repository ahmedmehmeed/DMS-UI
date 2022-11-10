import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ApiRoutes } from '../../Helpers/app/apiRoutes';
import { item } from '../../Models/Item/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient){ }

  GetAllItems(){ 
    return this.http.get<item[]>(this.apiUrl+ApiRoutes.item.items)
  }

  
}
