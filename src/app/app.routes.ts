import { Routes } from '@angular/router';
import { InicioComponent } from './gaming-shop/inicio/inicio.component';
import { ProductsComponent } from './gaming-shop/products/products.component';
import { ContactComponent } from './gaming-shop/contact/contact.component';

export const routes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'productos', component: ProductsComponent},
    {path: 'contacto', component: ContactComponent}
];


