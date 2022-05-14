import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

function passwordMatchValidator(password: string): ValidatorFn {
  return (control: FormControl) => {
    // console.log(control)
    if (!control || !control.parent) {
      return null;
    }
    return control.parent.get(password).value === control.value ? null : { mismatch: true };
  };
}


@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {
  public customerForm: FormGroup;
passwordPattern:string="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
emailpattern:string=('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
  constructor(private fb: FormBuilder, private customerService: CustomerService, private router: Router) { }

  public customerFormInit() {
    this.customerForm = this.fb.group({
      customerName: ['', [Validators.required,Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
       phoneNumber: ['', [Validators.required,Validators.minLength(5)]],
      password: ['', [Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
      confirmPassword: ['', [Validators.required,passwordMatchValidator('password')]],
      branches: this.fb.array([
        this.fb.group({
          branchName: ['', [Validators.required]],
          email: ['', [Validators.required]],
          phoneNumber: ['', [Validators.required]],
          branchCity: ['', [Validators.required]],
          branchAddress: ['', [Validators.required]],
          branchType: ['', [Validators.required]],
          branchBusiness: ['', [Validators.required]],
        })
      ])

    }
    )

  }

  public ngOnInit(): void {
    this.customerFormInit()
    
  }

  public onAdd() {
    const branchLength = this.branches.length;
    const newBranch = this.fb.group({
      branchName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      branchCity: ['', [Validators.required]],
      branchAddress: ['', [Validators.required]],
      branchType: ['', [Validators.required]],
      branchBusiness: ['', [Validators.required]],
    });
    this.branches.push(newBranch);
    console.log(newBranch);
  }

  public onSubmit() {
    this.customerService.createCustomer(this.customerForm.value).subscribe(
      (response: any) => {
        // alert("Account Created Successfully !!!!!!!!")
        console.log(response);
        this.router.navigate(['customer-view']);
        this.customerForm.reset();
      },
      (error: any) => {
        console.log(error);
      }

      
    )
  }

  public getCustomerName() {
    return this.customerForm.get('customerName')
  }

  public getEmail() {
    return this.customerForm.get('email')

  }

  public getPhoneNumber() {
    return this.customerForm.get('phoneNumber')

  }
  public getPassword() {
    return this.customerForm.get('password')

  }

  public getConfirmPassword() {
    return this.customerForm.get('confirmPassword')
  }

  public get branches() {
    return this.customerForm.get('branches') as FormArray;
  }

  get f() { return this.customerForm.controls; }
  

}