import { Component, OnInit } from '@angular/core';
import {ListService} from'../../../serves/list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  data: any;
  term: string;
  constructor(private userservice: ListService, private route:Router) { }


  setProducId(id){
    localStorage.setItem('id',id);
    this.route.navigate(['/product']);
  }
  
   addProduct(id){
    let products = [];
    if(localStorage.getItem('products')){
        products = JSON.parse(localStorage.getItem('products'));
    }
    products.push({'productId' :id });
    localStorage.setItem('products', JSON.stringify(products));
     this.route.navigate(['/cart']);
}
 
  ngOnInit(): void {
  
    this.userservice.ProductList().subscribe({
      next: (data) => {
        this.data=data; 
      },
      error: (msg) => {
        console.log('error',msg);
      }
    })
    
    
  }
  }


