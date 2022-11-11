import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { appRoutes } from '../../../../Shared/Helpers/app/appRoutes';
import { item } from '../../../../Shared/Models/Item/item';
import { AuthService } from '../../../../Shared/Services/Auth/authservice';
import { ItemService } from '../../../../Shared/Services/Item/item.service';
import { OrderService } from '../../../../Shared/Services/Order/order.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    private itemsService:ItemService,
    private toastr:ToastrService,
    private spinner: NgxSpinnerService ,
    private orderService:OrderService,
    private authService:AuthService,
    private router :Router
    ) { }

  /*   State */
  items:item[];

   /*  UI */
   isLoading:boolean=true;
   isLogedIn:boolean;
   isAddOrder:boolean;

  ngOnInit(): void {
    this.getItems();
    this.watchLoginState();
  }


  getItems(){
    this.spinner.show(); 
    this.itemsService.GetAllItems().subscribe(
      (res)=>{
         this.items=res;
         console.log(this.items)

      },
      (err)=> { this.spinner.hide()}, 
      ()=>{
        this.isLoading=false
        this.spinner.hide();  
      })
  }

  addOrder(item:item){
    if(this.isLogedIn){
      this.isAddOrder=true;
      this.orderService.AddOrder(item.id).subscribe(
        (res)=>{
        this.toastr.success("Order Add Successfully!")
        this.isAddOrder=false;
        },
        (err)=>{
          this.toastr.error("Failed To Add Order !")
        }
      )
    }
  else{
    this.toastr.warning("Please login before Adding Order !")
   }
  }

  private watchLoginState(): void {
    // Watch authentication status changes
    this.authService.getLogedIn().subscribe((isLoggedIn) => {
      this.isLogedIn = isLoggedIn;
    });
  } 

}
