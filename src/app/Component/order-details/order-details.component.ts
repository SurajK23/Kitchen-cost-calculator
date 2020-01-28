import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ItemService } from 'src/app/Services/item.service';
import { Item } from 'src/app/Model/item.model';
import { OrderItemService } from 'src/app/Services/order-item.service';


@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  listitem : any;
  gtotal = 0
  id : number;
  constructor(private routedata:ActivatedRoute,private item : ItemService,private menu :OrderItemService) { }

  ngOnInit() {
    this.listitem = this.item.getItemdetalist();
    console.log(this.listitem[0]);
    //this.gtotal = this.gtotal + this.listitem[0].gtotal;
    // console.log(this.gtotal);
  }
  delete(i){
    this.item.deleteitem(i);
    this.id = i;
    console.log(this.id);
  }

}
