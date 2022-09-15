import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  productdetails=[
    {
    "pid":"001",
    "image":"assets/laptop.jfif",
    "pname":"Laptop",
    "pdescription":"16 GB RAM, 12th Generation, i7 processor, Operating system: Windows 11",
    "Status":"In Stock"
    },
    {
      "pid":"002",
      "image":"assets/mobile1.jfif",
      "pname":"Mobile",
      "pdescription":"8 GB RAM, 256 GB ROM, Dual Camera, Crystal-clear display, 5000mAh battery",
      "Status":"In Stock"
    },
    {
        "pid":"003",
        "image":"assets/dress.jfif",
        "pname":"Dress",
        "pdescription":"Cotton Material, Long Sleeves, Transparent Duppatta, semi stitched",
        "Status":"Out of Stock"
    },
    {
      "pid":"004",
      "image":"assets/watch.jfif",
      "pname":"Watch",
      "pdescription":"Bleed Blue, Day and Date Functioning Strap Adult Quartz Watch  ",
      "Status":"In Stock"
    },
    {
        "pid":"005",
        "image":"assets/toy.jfif",
        "pname":"Toy",
        "pdescription":"Kids creation Play Set Non Toxic Plastic Unbreakable Toys",
        "Status":"Out of Stock"
    },
    {
      "pid":"006",
      "image":"assets/earrings.jfif",
      "pname":"Earring",
      "pdescription":"Colour: Silver Oxidiz, Material	German: Silver Closure",
      "Status":"In Stock"
    },
    {
      "pid":"007",
      "image":"assets/headphone.jfif",
      "pname":"Headphone",
       "pdescription":"Over Ear Active Noise Cancellation Headphones with Mic",
       "Status":"In Stock"
    },
    {
      "pid":"008",
      "image":"assets/powerbank.jfif",
      "pname":"Powerbank",
      "pdescription":"3i 20000mAh Lithium Polymer 18W Fast PD Charging, Input- Type C",
      "Status":"Out of Stock"
    },
    {
      "pid":"009",
      "image":"assets/footwear.jfif",
      "pname":"Footwear",
      "pdescription":"Women Copper Flats Sandal, Durable stiching, outer material : synthetic",
      "Status":"Out of Stock"
    },
  ]


  ngOnInit(): void {
  }

}
