import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { item } from '../../../../Shared/Models/Item/item';
import { ItemService } from '../../../../Shared/Services/Item/item.service';

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
    ) { }

  /*   State */
  items:item[];

   /*  UI */
   isLoading:boolean=true;


  ngOnInit(): void {
    this.getItems();
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
      }
      
    )
  }

  
  
}
