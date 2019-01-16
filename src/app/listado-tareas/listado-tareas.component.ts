import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listado-tareas',
  templateUrl: './listado-tareas.component.html',
  styleUrls: ['./listado-tareas.component.css']
})
export class ListadoTareasComponent {
  @Input() arrData;
  @Output() alternarCompletada = new EventEmitter();
  @Output() borrarTarea = new EventEmitter();

  emitirCambioCompletada(id) {
    this.alternarCompletada.emit(id);
  }
  eliminar(id) {
    this.borrarTarea.emit(id); /////
  }
}
