import { Subject } from 'rxjs';

export class LibrosService {
  librosSubject = new Subject();

  private libros: string[] = [
    'Libro de Abraham',
    'Libro de Groserias Fuertes',
    'Libro de Chistes de Ellie',
  ];

  agregarLibro(libroNombre: string) {
    this.libros.push(libroNombre);
    this.librosSubject.next();
  }

  eliminarLibro(libroNombre: string) {
    this.libros = this.libros.filter((l) => l !== libroNombre);
    this.librosSubject.next();
  }

  obtenerLibros() {
    return [...this.libros];
  }
}
