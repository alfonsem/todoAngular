import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tareas = [];
  tareasFiltradas = [];
  filtroTexto: string = '';

  addTarea(tareaTexto: string){
    console.log('añadiendo....'+tareaTexto);
    this.tareas.push(tareaTexto);
    this.filtrarTareas(this.filtroTexto);
  }

  filtrarTareas(filtroTexto: string){
    console.log('filtrando....'+filtroTexto);
    this.filtroTexto = filtroTexto;
    this.tareasFiltradas = this.tareas.filter(tarea => tarea.match(this.filtroTexto));
    console.log(this.tareasFiltradas);
  }
}
