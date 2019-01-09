import { Component } from '@angular/core';
import { text } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tareas = [];
  addTarea(tareaTexto){
    this.tareas.push(tareaTexto);
  }
}
