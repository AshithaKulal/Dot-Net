import { Component, OnInit } from '@angular/core';
import * as mobiledata from "../mobile.json";

@Component({
  selector: 'app-mobiledisplay',
  templateUrl: './mobiledisplay.component.html',
  styleUrls: ['./mobiledisplay.component.css']
})
export class MobiledisplayComponent implements OnInit {

  constructor() { }

  mobile:any=(mobiledata as any).default;

  ngOnInit(): void {
  }

}
