import { Component, OnInit } from '@angular/core';
import {ListService} from'../../../serves/list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  data: any;
  constructor(private userservice: ListService, private route:Router) { }

   ///cart
   addProduct(id){
    let products = [];
    if(localStorage.getItem('products')){
        products = JSON.parse(localStorage.getItem('products'));
    }
    products.push({'productId' :id });
    localStorage.setItem('products', JSON.stringify(products));
     this.route.navigate(['/cart']);
}
  ngOnInit() {
    this.userservice.setId(localStorage.getItem('id'));
    this.userservice.ProductDetail().subscribe({
      next: (data) => {
        this.data=data;
      },
      error: (msg) => {
        console.log('error',msg);
      }
  })
  
  }

}
