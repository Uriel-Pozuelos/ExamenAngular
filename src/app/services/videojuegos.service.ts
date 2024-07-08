import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IVideojuegos } from "../interfaces/Videojuegos";
import { ICategorias } from "../interfaces/Categorias";
import { environment } from "../../environments/environment.development";

@Injectable({
    providedIn: 'root'
})
export class VideojuegosServices {
    private _baseUrl: string = environment.endPoint;
    private _apiUrl: string = this._baseUrl + 'Videojuegos/';

    constructor(private _http: HttpClient) { }

    getList(): Observable<IVideojuegos[]> {
        return this._http.get<IVideojuegos[]>(`${this._apiUrl}ListaJuegos`);
    }

    getJuegoName(nombre: string): Observable<IVideojuegos[]> {
        return this._http.get<IVideojuegos[]>(`${this._apiUrl}NombreJuego?nombre=${nombre}`);
    }

    getCategorias(): Observable<ICategorias[]> {
        return this._http.get<ICategorias[]>(`${this._apiUrl}Categorias`);
    }

    getJuegosPorCategoria(categoriaId: number): Observable<IVideojuegos[]> {
        return this._http.get<IVideojuegos[]>(`${this._apiUrl}CategoriaJuego?categoriaId=${categoriaId}`);
    }
}


