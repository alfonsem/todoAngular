import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filtrado-tareas',
  templateUrl: './filtrado-tareas.component.html',
  styleUrls: ['./filtrado-tareas.component.css']
})
export class FiltradoTareasComponent {
  @Output() nuevoFiltro = new EventEmitter();
  @Output() reset = new EventEmitter();
  nuevaBusquedaTexto: string = '';

  buscar() {
    this.nuevoFiltro.emit(this.nuevaBusquedaTexto);
  }

  borrar() {
    this.reset.emit();
    this.nuevaBusquedaTexto = '';
  }

}
