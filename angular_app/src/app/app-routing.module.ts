import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { DressComponent } from './dress/dress.component';
import { MobileComponent } from './mobile/mobile.component';
import { AppliancesComponent } from './appliances/appliances.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'products',component:ProductsComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'dress',component:DressComponent},
  {path:'mobile',component:MobileComponent},
  {path:'appliances',component:AppliancesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
