import { Component, OnInit } from '@angular/core';
import { GridApi, GridOptions, IDatasource, IGetRowsParams } from 'ag-grid-community';
import { order } from '../../../../Shared/Models/Order/order';
import { orderFilter } from '../../../../Shared/Models/Order/orderFilter';
import { Pagination } from '../../../../Shared/Models/pagination';
import { OrderService } from '../../../../Shared/Services/Order/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  Orders: order[] = [];
  ordersPagination:Pagination;
  filter: orderFilter = { pageNumber: 1, pageSize: 5 };
  
  gridApi: GridApi = <GridApi>{};

  columnDefs = [
    {
      headerName: "#",
      valueGetter: function (params:any) {
        return params.node.rowIndex + 1;
      },
      sortable: false,
      filter: false,
      minWidth: 70,
    },
    {
      headerName: "Customer Name",
      field: "username",
      sortable: true,
      filter:true,
      minWidth: 200,
    },
    {
      headerName: "Order Date",
      field: "orderDate",
      sortable: true,
      filter:true,
      minWidth: 200
    },
    {
      headerName: "Item Name ",
      field: "itemName",
      sortable: true,
      filter:true,
      minWidth: 150,
    },
    {
      headerName: "Item Price",
      field: "itemPrice",
      sortable: true,
      filter:true,
      minWidth: 280,
    },
    {
      headerName: "Item Description",
      field: "itemDescription",
      sortable: true,
      filter:true,
      minWidth: 280,
    },
     {
      headerName: "UOM",
      field: "uom",
      sortable: true,
      filter:true,
      minWidth: 280,
    }

  ];

  dataSource: IDatasource = {
    getRows: (params: IGetRowsParams) => {
      this.gridApi.showLoadingOverlay();
      this.orderService.GetAllOrders(this.filter)
        .subscribe((data: any) => {
          this.ordersPagination =JSON.parse( data.headers.get("pagination")); 
          this.Orders=data.body;
          console.log(this.Orders);
          console.log(this.ordersPagination);
          params.successCallback(this.Orders, this.ordersPagination.totalItems);
          this.gridApi.hideOverlay();
          if (this.ordersPagination.totalItems == 0) {
            this.gridApi.showNoRowsOverlay();
          }
        }),
        (err) => {
          console.log(err);
        };
    },
  };

  gridOptions: GridOptions = {
    pagination: true,
    rowModelType: "infinite",
    cacheBlockSize: this.filter.pageSize,
    paginationPageSize: this.filter.pageSize,
  };

  onGridReady(params:any) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
    this.gridApi.setDatasource(this.dataSource);
  }
  
  onPaginationChanged(e) {
    try {
      this.filter.pageNumber = this.gridApi.paginationGetCurrentPage() + 1;
    } catch (error) {}
  }


  constructor(private orderService:OrderService) { }

  ngOnInit(): void {
  }

filterOrders(){
  this.gridApi.showLoadingOverlay();
  this.gridApi.setDatasource(this.dataSource);
}

}
