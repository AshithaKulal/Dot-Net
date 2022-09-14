import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor() { }
  public feedback="";

  msg(){
    alert('Thanks for your feedback');
  }

  ngOnInit(): void {
  }

}
