import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseURL = "http://localhost:3000/customerDetails"
  constructor(private http: HttpClient) { }

  public createCustomer(customer: any) {
    return this.http.post(this.baseURL, customer)
  }
  public  findAllCustomers(){
    return this.http.get(`${this.baseURL}`);
  }
}
