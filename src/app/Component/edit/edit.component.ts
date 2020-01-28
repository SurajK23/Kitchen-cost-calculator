import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/Services/item.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  data : any;
  id:number;
  type : string;
  rate : number;
  name : string;
  unit : number;
  subunit : number;
  total: number;

  constructor( private manager:ItemService,private routeId:ActivatedRoute,private route:Router) { }

  ngOnInit() {
    this.id = parseInt(this.routeId.snapshot.paramMap.get("id"));
    this.data = this.manager.getitemdetalisById(this.id);

    this.name = this.data.itemname;
    this.type = this.data.itemtype;
    this.rate = this.data.itemrate;
    this.unit = this.data.itemunit;
    this.subunit = this.data.itemsubunit;
    this.total = this.data.itemtotal;
    // console.log(this.data);  
    // console.log(this.data.itemtype);  
  }

  update(data){
   let a = this.manager.edititem(this.id,data);
    console.log(a);
    this.route.navigate([""]);
  }
  opr(){
    //console.log(data);
    this.total = this.unit * this.subunit * this.rate;    
  }
}
