import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-crear-tarea',
  templateUrl: './crear-tarea.component.html',
  styleUrls: ['./crear-tarea.component.css']
})
export class CrearTareaComponent implements OnInit {
  @Output() nuevaTarea = new EventEmitter();
  nuevaTareaTexto = '';
  handleKeyup(ev){
    if(ev.keyCode === 13 && this.nuevaTareaTexto.trim()!==''){
      this.nuevaTarea.emit(this.nuevaTareaTexto.trim());
      this.nuevaTareaTexto = '';
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
