import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

// @Injectable({
//   providedIn: 'root'
// })
@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];

  constructor(
    private http: HttpClient
  ) { }

  addToCart (product){
    this.items.push(product);
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items; 
    //why we need to return an empty array?
    //can't we just simple assing an empty array to 'items' array
  }

  getShippingPrices(){
    return this.http.get('/assets/shipping.json');
  }
}
