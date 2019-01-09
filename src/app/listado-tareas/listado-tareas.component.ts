import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listado-tareas',
  templateUrl: './listado-tareas.component.html',
  styleUrls: ['./listado-tareas.component.css']
})
export class ListadoTareasComponent implements OnInit {
  @Input() arrData;
  constructor() { }

  ngOnInit() {
  }

}
