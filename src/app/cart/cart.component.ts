import { Component, OnInit } from '@angular/core';
import {ListService} from'../../../serves/list.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
addcart:any;
  data: any;
  constructor(private userservice: ListService) { }

   

  ngOnInit(): void {

    
    let list=[];
  
    let index=0;
    this.addcart=JSON.parse(localStorage.getItem('products')); 
    for (let i = 0; i < this.addcart.length; i++) {
      let id=this.addcart[i]['productId'];
    
    this.userservice.setId(id);
    this.userservice.ProductDetail().subscribe({
      next: (data) => {
        
        list[index]=data;
        index++;
        // console.log(data);
        
        // list.push(this.data);
        
      },
      error: (msg) => {
        console.log('error',msg);
      }
     })
    
   }
   this.data=list;
}
   

// removeProduct(productId) {
  
//   let storageProducts = JSON.parse(localStorage.getItem('products'));
//   let products = storageProducts.filter(product => 'productId' !== productId );
//   localStorage.setItem('products', JSON.stringify(products));
//    console.log( products);
   
// }

    

}
