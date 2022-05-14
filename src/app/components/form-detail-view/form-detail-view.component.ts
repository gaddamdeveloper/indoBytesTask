import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-form-detail-view',
  templateUrl: './form-detail-view.component.html',
  styleUrls: ['./form-detail-view.component.scss']
})
export class FormDetailViewComponent implements OnInit {


  customerArray:any;
  hideTable:boolean=false;
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
   this.getCustomerDetails();
  }

  getCustomerDetails() {
    this.customerService.findAllCustomers().subscribe(
      (response:any) => {
        this.customerArray=response;
        // this.hideTable=true;
        console.log(response);
      },
      (error: any) => {
        console.log(error);
      }
    )
  }
}
