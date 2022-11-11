import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageKeys } from '../../../Helpers/app/LocalStorageKeys';
import { AuthService } from '../../../Services/Auth/authservice';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 userToken:any;

 
 /*   UI */
 isAdmin:boolean=false; 
 isLogedIn:boolean;
 isSubmittedlogin:boolean=false;

  constructor(
    private authService:AuthService,
    ) { }

  ngOnInit(): void {
    this.watchLoginState();
    this.watchrRolesState();
  }



  private watchLoginState(): void {
    // Watch authentication status changes
    this.authService.getLogedIn().subscribe((isLoggedIn) => {
      this.isLogedIn = isLoggedIn;
      console.log("cvsdfb",this.isLogedIn)
    });
  } 

  private watchrRolesState(): void {
    // Watch authentication status changes
    this.authService.getRoles().subscribe((isAdmin) => {
      this.isAdmin = isAdmin;
      console.log("roles",this.isAdmin)
    });
  } 


  logout(){
    this.authService.logout();
  }
  

  





}
