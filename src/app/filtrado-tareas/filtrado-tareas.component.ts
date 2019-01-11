import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filtrado-tareas',
  templateUrl: './filtrado-tareas.component.html',
  styleUrls: ['./filtrado-tareas.component.css']
})
export class FiltradoTareasComponent implements OnInit {
  @Output() nuevoFiltro = new EventEmitter();
  nuevoFiltroTexto: string = '';

  buscar() {
    this.nuevoFiltro.emit(this.nuevoFiltroTexto);
  }

  constructor() { }

  ngOnInit() {
  }

}
