import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { ApiRoutes } from '../../Helpers/app/apiRoutes';
import { appRoutes } from '../../Helpers/app/appRoutes';
import { LocalStorageKeys } from '../../Helpers/app/LocalStorageKeys';
import{login} from '../../Models/Auth/login';
import{register} from '../../Models/Auth/register'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogedIn=new BehaviorSubject<boolean>(this.isTokenAvailable());
  isAdmin=new BehaviorSubject<boolean>(this.checkAdminRole());
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient,private router : Router){ }

login(login:login){
return this.http.post(this.apiUrl+ApiRoutes.account.login,login).pipe(
  tap((res:any)=>{
    if(res.isSuccess){
      localStorage.setItem(LocalStorageKeys.JWT,res.token)
      localStorage.setItem(LocalStorageKeys.Roles,res.roles)
      this.setLogedIn(true)
      this.setRoles(this.checkAdminRole()); 
    this.router.navigate([appRoutes.items.full]); 
    }
  })
)
}

register(register:register){
  return this.http.post(this.apiUrl+ApiRoutes.account.register,register).pipe(
    tap((res:any)=>{
      if(res.isSuccess){
        localStorage.setItem(LocalStorageKeys.JWT,res.token)
        localStorage.setItem(LocalStorageKeys.Roles,res.roles)
        this.setLogedIn(true)
        this.router.navigate([appRoutes.items.full]);  
      }
    })
  )
  }


logout(){
  this.setLogedIn(false)
  this.setRoles(false)
  localStorage.removeItem(LocalStorageKeys.JWT)
  localStorage.removeItem(LocalStorageKeys.Roles)
  this.router.navigate([appRoutes.items.sub]);
}

setLogedIn(isLogedIn:boolean){
this.isLogedIn.next(isLogedIn);
}

  getLogedIn(): BehaviorSubject<boolean>{
  return this.isLogedIn;
  }

  setRoles(isAdmin:boolean){
    this.isAdmin.next(isAdmin);
    }
  getRoles(): BehaviorSubject<boolean>{
    return this.isAdmin;
    }

  private isTokenAvailable(): boolean {
    return !!localStorage.getItem(LocalStorageKeys.JWT);
  }

  private checkAdminRole(): boolean {
    if(localStorage.getItem(LocalStorageKeys.Roles)=="Admin")
       return true;
    else
    return false
  }
  

}
