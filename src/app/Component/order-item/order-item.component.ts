import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/Services/item.service';
import { Item } from 'src/app/Model/item.model';
import { Router } from '@angular/router';
import { OrderItem } from 'src/app/Model/order-item.model';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {
  listItem : Item[]; list : any;
  grandtotal = 0;
  itembyId:any;
  typeArray :any;
  name : string;
  type : any;
  rate : number;
  unit : any;
  sub_unit : any;
  total : number;
  gtotal : number;
  isdisplay = false;
  isshow = false;
  is = false;
  id: any;

  constructor(private itemmanager:ItemService,private redirect : Router) { }

  ngOnInit() {
  this.show();
  }
  show(){
    this.listItem =  this.itemmanager.getItemList();
    //console.log(this.listItem);
  }
  sub(i){
    this.itembyId = this.itemmanager.getItemById(i);
    this.typeArray = this.itembyId.type;
    this.isdisplay = true;
  }
  details(i){
    this.id = i;
    this.name = this.itembyId.name;
    this.type = this.typeArray[this.id];
    this.rate = this.itembyId.rate;
    this.isshow = true;
    //this.redirect.navigate(['/details/id']);
    this.sub_unit = 0;
    this.unit = 0;
    this.total = 0;

  }
  opr(){
    //console.log(data);
    this.total = this.unit * this.sub_unit * this.rate;    
  }
  formdata(data){
    let itemdata : OrderItem =
    {
      itemname : data.value.iname,
      itemtype : data.value.type,
      itemrate : data.value.rate,
      itemunit : data.value.unit,
      itemsubunit : data.value.subunit,
      itemtotal : data.value.tprice,
      gtotal :  this.grandtotal
    }
    this.total = (data.form.value.tprice);
    let a = this.itemmanager.additem(itemdata);
    this.is=true;
    //console.log(a);
    
    this.add()
 
  }
  totale(data){
    
   
  }
  delete(i){
    this.itemmanager.deleteitem(i);
  }
  add(){
    this.list = this.itemmanager.getItemdetalist();
    //  console.log("price s" + this.total);
     this.grandtotal = this.grandtotal + this.total;
    // console.log(this.grandtotal);
  }
  edit(i,data){
    // console.log(i);
    this.redirect.navigate(["/edit",i])
  }

}
