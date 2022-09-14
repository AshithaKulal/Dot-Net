import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

 
  newItem: string=' '  

  Add_item(item_name:string):void{
    if(!item_name)
    {
      this.newItem=' ';
    }
    this.newItem=item_name; 
    console.log(item_name)
  }

  ngOnInit(): void {
  }

}
