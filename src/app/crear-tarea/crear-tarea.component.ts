import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-crear-tarea',
  templateUrl: './crear-tarea.component.html',
  styleUrls: ['./crear-tarea.component.css']
})
export class CrearTareaComponent implements OnInit {
  @Output() nuevaTarea = new EventEmitter();
  @Output() nuevoFiltro = new EventEmitter();
  nuevaTareaTexto = '';
  nuevoFiltroTexto = '';
  handleKeyup(ev){
    if(ev.keyCode === 13 && this.nuevaTareaTexto.trim()!==''){
      this.nuevaTarea.emit(this.nuevaTareaTexto.trim());
      this.nuevaTareaTexto = '';
      console.log('hola');
    }
  }

  handleKeyup1(ev){
    if(ev.keyCode === 13 && this.nuevoFiltroTexto.trim()!==''){
      this.nuevoFiltro.emit(this.nuevoFiltroTexto.trim());
      this.nuevoFiltroTexto = '';
      console.log('adios)');
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
