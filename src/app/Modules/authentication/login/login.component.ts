import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../../Shared/Services/Auth/authservice';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
/*   UI */

isloggedIn:boolean=false;
isSubmittedlogin:boolean=false;


  constructor( 
    private authService:AuthService,
    private formBuilder: FormBuilder,
    private router:Router,
    private toastr:ToastrService
    ) { }



  ngOnInit(): void {
    this.initForms();
    this.initIslogedIn();
  }

  
  LoginForm: FormGroup ;


  initForms(){
  this.initloginForm();
  }

  initIslogedIn(){
    this.authService.getLogedIn().subscribe(
      (res:any)=>{
         this.isloggedIn=res;
      
      }
    )
  }

  initloginForm(){
   this.LoginForm=this.formBuilder.group({
    email:['',[Validators.required,Validators.email]],
    password:['',Validators.compose([
      Validators.required, Validators.minLength(8)])]
  })  
  }

  get loginControls():any{
    return this.LoginForm.controls;
  }

  
  login(){
    this.isSubmittedlogin=true;
   this.authService.login(this.LoginForm.value).subscribe(
    (res)=>{
      this.isloggedIn=true;
      console.log(res)
      this.isSubmittedlogin=false;

    },
    (err)=>{  
       this.isSubmittedlogin=false;
       this.toastr.error(err)
       console.log(err.value)
      }
   )
  }



}
