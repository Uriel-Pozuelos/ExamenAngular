import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProductsComponent } from './products/products.component';

import { Component } from '@angular/core';

@NgModule({
  declarations: [
    ContactComponent,
    InicioComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ContactComponent,
    InicioComponent,
    ProductsComponent
  ]
})

export class GamingShopModule {

}
