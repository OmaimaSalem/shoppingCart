import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
   firstReactiveForm :FormGroup;
   emailerror;
  addresserror;
  usernameerror;
  phoneerror;
   constructor(private fb: FormBuilder,private router: Router) { }
  
  ngOnInit(): void {
    this.firstReactiveForm = this.fb.group({
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      phone: ['', Validators.required]
     
 });
  }
  get registerFormControl() {
    console.log( this.firstReactiveForm.controls)
    return this.firstReactiveForm.controls;
    }

    handleReactiveFormSubmit()
    {
     
      this.usernameerror=this.firstReactiveForm.controls.username.errors;
      this.emailerror=this.firstReactiveForm.controls.email.errors;
      this.addresserror=this.firstReactiveForm.controls.address.errors;
      this.phoneerror=this.firstReactiveForm.controls.phone.errors;

      if(this.usernameerror ==null && this.emailerror==null && this.phoneerror==null && this.addresserror==null)
      {
        this.router.navigate(['/shopping']);
      }
    }

}