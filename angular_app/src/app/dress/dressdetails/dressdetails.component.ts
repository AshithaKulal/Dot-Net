import { Component, OnInit } from '@angular/core';
import * as dress from "../dress.json";

@Component({
  selector: 'app-dressdetails',
  templateUrl: './dressdetails.component.html',
  styleUrls: ['./dressdetails.component.css']
})
export class DressdetailsComponent implements OnInit {

  constructor() { }

  displaydress:any=(dress as any).default;

  ngOnInit(): void {
  }

}
