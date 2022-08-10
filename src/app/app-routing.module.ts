import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { CartComponent } from './cart/cart.component';
import { ClothingAccessoriesComponent } from './clothing-accessories/clothing-accessories.component';
import { HomeComponent } from './home/home.component';
import { IconComponent } from './icon/icon.component';
import { JoinBodyFitComponent } from './join-body-fit/join-body-fit.component';
import { NewTrendingComponent } from './new-trending/new-trending.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ImgComponent } from './performance/img/img.component';
import { Img2Component } from './performance/img2/img2.component';
import { Img3Component } from './performance/img3/img3.component';
import { PerformanceComponent } from './performance/performance.component';
import { ProtineComponent } from './protine/protine.component';
import { SalesSpecialsComponent } from './sales-specials/sales-specials.component';
import { TopProductsComponent } from './top-products/top-products.component';
import { VitaminsHealthComponent } from './vitamins-health/vitamins-health.component';
import { WeightManagementComponent } from './weight-management/weight-management.component';

const routes: Routes = [
  {path:'icon',component:IconComponent},
  {path:'account',component:AccountComponent},
  {path:'cart',component:CartComponent},
  {path:'clothingaccessories',component:ClothingAccessoriesComponent},
  {path:'joinbodyfit',component:JoinBodyFitComponent},
  {path:'newtrending',component:NewTrendingComponent},
  {path:'performance',component:PerformanceComponent,children:[
   {path:'img',component:ImgComponent},
   {path:'img2',component:Img2Component},
   {path:'img3',component:Img3Component},
]},
  {path:'home',component:HomeComponent},
  {path:'protine',component:ProtineComponent},
  {path:'salesspecials',component:SalesSpecialsComponent},
  {path:'topproducts',component:TopProductsComponent},
  {path:'vitaminshealth',component:VitaminsHealthComponent},
  {path:'weightmanagement',component:WeightManagementComponent},
  {path:'',redirectTo:"home",pathMatch:"full"},
  {path:'**',component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
