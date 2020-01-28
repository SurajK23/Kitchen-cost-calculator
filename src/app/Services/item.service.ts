import { Injectable } from '@angular/core';
import { Item } from '../Model/item.model';
import { OrderItemService } from './order-item.service';
import { OrderItem } from '../Model/order-item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private orderitem : OrderItemService) { }
/// item details methods
  additem(data){
    this.orderitem.orderdetails.push(data);
    console.log("Itemdetails data Addedd Successfully...");
  }
  getItemdetalist(){
    return this.orderitem.orderdetails;
    console.log("Get Itemdetails Successfully...");

  }
  public edititem(pos:number,item:OrderItem){

    this.orderitem.orderdetails[pos] = item;  
    console.log(item+"Item edited Successfully...");
  }
  getitemdetalisById(id:number){
   return  this.orderitem.orderdetails[id];
  }
  public deleteitem(pos:number){

    this.orderitem.orderdetails.splice(pos,1);
    console.log(pos + " item Deleted Successfully...");
  }

  // Orderd item methods
  public getItemById(id:number){
    return this.orderitem.itemList[id];
  }

  public getItemList(){
    return this.orderitem.itemList;
    console.log("All items Fetched Successfully...");
  }
}
