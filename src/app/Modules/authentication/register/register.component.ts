import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { appRoutes } from '../../../../Shared/Helpers/app/appRoutes';
import { PasswordStrengthValidator } from '../../../../Shared/Helpers/validators/password-strength-validator';
import { AuthService } from '../../../../Shared/Services/Auth/authservice';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private authService:AuthService,
    private formBuilder: FormBuilder,
    private toastr:ToastrService,
    private router:Router
  ) { }

  ngOnInit(): void {
   this.initRegisterForm();
  }



  /* UI State */
    RegisterForm: FormGroup ;
    isRegistered:boolean=false;


/*     State */
    
  initRegisterForm(){
    this.RegisterForm=this.formBuilder.group({
      userName:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.compose([
        Validators.required, Validators.minLength(8), PasswordStrengthValidator])]
   })  
   }
 
   get RegisterControls():any{
     return this.RegisterForm.controls;
   }
 
   
   register(){
    this.isRegistered=true
    this.authService.register(this.RegisterForm.value).subscribe(
     (res)=>{
       this.toastr.success("You have successfully created your account")
       this.router.navigate([appRoutes.Authentication.login]);  
     },
     ()=>{ this.isRegistered=false;},
     ()=>{
       this.isRegistered=false;
       this.router.navigate([appRoutes.items.full]);  
      }
    )
   }
}
