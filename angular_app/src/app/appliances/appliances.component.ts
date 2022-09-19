import { Component, OnInit } from '@angular/core';
import * as prod from "../data/products.json";
import { HomeAppliances } from '../home-appliances';
import { HomeAppliancesService } from '../home-appliances.service';

@Component({
  selector: 'app-appliances',
  templateUrl: './appliances.component.html',
  styleUrls: ['./appliances.component.css']
})
export class AppliancesComponent implements OnInit {
  appliances: HomeAppliances[]=[];

  constructor(private applianceservice:HomeAppliancesService) { }
  p:any=(prod as any).default;

  ngOnInit(): void {
    const applianceObservable= this.applianceservice.getAppliancesDetails();
    applianceObservable.subscribe((HAData: HomeAppliances[])=>{
      this.appliances=HAData;
    });
  }

}
