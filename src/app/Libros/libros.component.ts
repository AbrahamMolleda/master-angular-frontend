import { Component, OnInit, OnDestroy } from '@angular/core';
import { LibrosService } from '../services/libros.service';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
})
export class LibrosComponent implements OnInit, OnDestroy {
  // libros = ['Matemáticas 1', 'Algoritmos Básicos', 'Algebra Nivel Básico'];
  libros = [];
  constructor(private librosService: LibrosService) {}
  private librosSubscription: Subscription;

  eliminarLibro(libro) {
    // this.libros = this.libros.filter((p) => p !== libro);
  }

  guardarLibro(f) {
    // console.log('Objeto Formulario', f);
    if (f.valid) {
      // this.libros.push(f.value.nombreLibro);
      this.librosService.agregarLibro(f.value.nombreLibro);
    }
  }

  ngOnInit(): void {
    this.libros = this.librosService.obtenerLibros();
    this.librosSubscription = this.librosService.librosSubject.subscribe(() => {
      this.libros = this.librosService.obtenerLibros();
    });
  }

  ngOnDestroy(): void {
      this.librosSubscription.unsubscribe();
  }
}
