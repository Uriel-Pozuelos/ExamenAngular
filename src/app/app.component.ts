import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';  // Asegúrate de importar FormsModule
import { NgFor, NgIf } from '@angular/common';
import { GamingShopModule } from './gaming-shop/gaming-shop.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgFor, NgIf, GamingShopModule,  HttpClientModule, FormsModule],  // Agrega FormsModule aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Videojuegos';
}

