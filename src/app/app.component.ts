import { Component } from '@angular/core';
import { Task } from './task.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filtroTexto: string = '';
  tareas: Array<Task> = [{ tareaTexto: 'Tarea de prueba', id: 0, completada: false }];
  tareasFiltradas: Array<Task> = this.tareas;

  addTarea(tareaTexto: string){
    console.log('añadiendo....'+tareaTexto);
    let newTask: Task = { tareaTexto, id: Date.now(), completada: false };
    this.tareas.push(newTask);
    this.filtrarTareas(this.filtroTexto);
  }

  filtrarTareas(filtroTexto: string){
    console.log('filtrando....'+filtroTexto);
    this.filtroTexto = filtroTexto;
    this.tareasFiltradas = this.tareas.filter(tarea => tarea.tareaTexto.match(this.filtroTexto));
    console.log(this.tareasFiltradas);
  }

  alternarCompletada(id) {
    this.tareas = this.tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }

      return tarea;
    });
  }

  eliminarTarea(id) {
    this.tareas = this.tareas.filter(tarea => tarea.id !== id);
    this.filtrarTareas(this.filtroTexto);
  }
}
