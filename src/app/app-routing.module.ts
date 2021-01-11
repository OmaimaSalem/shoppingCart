import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from '../app/cart/cart.component';
import { ProductDetailsComponent } from '../app/product-details/product-details.component';
import { ShoppingCartComponent } from '../app/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  
  {path:"shopping",component: ShoppingCartComponent},
  {path:"",component: ShoppingCartComponent},
  {path:"cart",component: CartComponent},
  {path:"product/cart",component: CartComponent},
  {path:"product",component: ProductDetailsComponent},
  {path:"checkout",component: CheckoutComponent},
  {path:"shopping/checkout",component: CheckoutComponent},
  {path:"cart/checkout",component: CheckoutComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
