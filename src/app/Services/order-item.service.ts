import { Injectable } from '@angular/core';
import { Item } from '../Model/item.model';
import { OrderItem } from '../Model/order-item.model';

@Injectable({
  providedIn: 'root'
})
export class OrderItemService {

  constructor() { }
  itemList : Item[]=[
    {
      name : 'shape', 
      type : ['Lsahpe','Ushape','Cshape','parallel'],
      rate : 100            
    },
    {
      name : 'drawers', 
      type : ['d1','d2','d3','d4'],
      rate : 100            
    },
    {
      name : 'shelf',
      type : ['s1','s2','s3','s4'],
      rate : 100            
    },
    {
      name : 'trolley',
      type : ['t1','t2','t3','t4'],
      rate : 100            
    },
  ]
  orderdetails : OrderItem[] = [];
}
