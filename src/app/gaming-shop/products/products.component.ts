import { ChangeDetectorRef, Component } from '@angular/core';
import { IVideojuegos } from '../../interfaces/Videojuegos';
import { ICategorias } from '../../interfaces/Categorias';
import { VideojuegosServices } from '../../services/videojuegos.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  videojuegos: IVideojuegos[] = [];
  categorias: ICategorias[] = [];
  selectedCategory: number = 0;
  search: string = '';

  constructor(private videojuegosService: VideojuegosServices, private cd: ChangeDetectorRef) {
    this.loadCategorias();
    this.loadVideojuegos();
  }

  loadCategorias(): void {
    this.videojuegosService.getCategorias().subscribe(categorias => {
      this.categorias = categorias;
      console.log('Categorías recibidas:', this.categorias); 
      console.log('Nombres de categorías:', this.categorias.map(categoria => categoria.nombre));
    });
  }
  

  loadVideojuegos(): void {
    this.videojuegosService.getList().subscribe(videojuegos => {
      this.videojuegos = videojuegos;
      this.cd.detectChanges();  // Asegúrate de que los cambios se detectan
    });
  }

  searchJuego(): void {
    if (this.search) {
      this.videojuegosService.getJuegoName(this.search).subscribe(videojuegos => {
        this.videojuegos = videojuegos;
        this.cd.detectChanges();  // Asegúrate de que los cambios se detectan
      });
    } else {
      this.loadVideojuegos();
    }
  }

  filterCategory(): void {
    if (this.selectedCategory == 0) {
      this.loadVideojuegos();
    } else if (this.selectedCategory) {
      this.videojuegosService.getJuegosPorCategoria(this.selectedCategory).subscribe(videojuegos => {
        this.videojuegos = videojuegos;
        this.cd.detectChanges();  // Asegúrate de que los cambios se detectan
      });
    } else {
      this.loadVideojuegos();
    }
  }

  getImageUrl(imageUrl: string): string {
    return `assets/images/${imageUrl}`;
  }
}

