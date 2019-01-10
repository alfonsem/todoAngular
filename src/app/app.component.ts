import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tareas = [];
  tareasFiltradas = [];
  filtroTexto = '';
  addTarea(tareaTexto){
    this.tareas.push(tareaTexto);
    this.filtrarTareas(this.filtroTexto);
  }

  filtrarTareas(filtroTexto){
    this.tareasFiltradas = this.tareas.filter(tarea => tarea.match(filtroTexto));
  }
}
