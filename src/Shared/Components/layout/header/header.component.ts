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

 isLogedIn:boolean;
 isSubmittedlogin:boolean=false;

  constructor(
    private authService:AuthService,
    private modalService: NgbModal
    ) { }

  ngOnInit(): void {
    this.watchLoginState();
  }

  openVerticallyCenteredMd(content){
    this.modalService.open(content, {
      centered: true,
      size: "md",
      scrollable: true,
    });
  }

  private watchLoginState(): void {
    // Watch authentication status changes
    this.authService.isLogedIn.subscribe((isLoggedIn) => {
      this.isLogedIn = isLoggedIn;
      console.log("cvsdfb",this.isLogedIn)
    });
  }

  logout(){
    this.authService.logout();
    this.watchLoginState();
  }
  
  clearData() {
    this.modalService.dismissAll("Cross click");
  }
  





}
