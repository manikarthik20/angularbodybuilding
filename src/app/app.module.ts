import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { TopProductsComponent } from './top-products/top-products.component';
import { SalesSpecialsComponent } from './sales-specials/sales-specials.component';
import { NewTrendingComponent } from './new-trending/new-trending.component';
import { CartComponent } from './cart/cart.component';
import { ProtineComponent } from './protine/protine.component';
import { PerformanceComponent } from './performance/performance.component';
import { WeightManagementComponent } from './weight-management/weight-management.component';
import { VitaminsHealthComponent } from './vitamins-health/vitamins-health.component';
import { ClothingAccessoriesComponent } from './clothing-accessories/clothing-accessories.component';
import { JoinBodyFitComponent } from './join-body-fit/join-body-fit.component';
import { IconComponent } from './icon/icon.component';
import { BulkBodyComponent } from './performance/bulk-body/bulk-body.component';
import { LeanBodyComponent } from './performance/lean-body/lean-body.component';
import { SixPackAbsComponent } from './performance/six-pack-abs/six-pack-abs.component';
import { ImgComponent } from './performance/img/img.component';
import { Img2Component } from './performance/img2/img2.component';
import { Img3Component } from './performance/img3/img3.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    TopProductsComponent,
    SalesSpecialsComponent,
    NewTrendingComponent,
    CartComponent,
    ProtineComponent,
    PerformanceComponent,
    WeightManagementComponent,
    VitaminsHealthComponent,
    ClothingAccessoriesComponent,
    JoinBodyFitComponent,
    IconComponent,
    BulkBodyComponent,
    LeanBodyComponent,
    SixPackAbsComponent,
    ImgComponent,
    Img2Component,
    Img3Component,
    PagenotfoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
