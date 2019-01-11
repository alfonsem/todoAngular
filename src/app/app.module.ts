import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CrearTareaComponent } from './crear-tarea/crear-tarea.component';
import { ListadoTareasComponent } from './listado-tareas/listado-tareas.component';
import { FiltradoTareasComponent } from './filtrado-tareas/filtrado-tareas.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearTareaComponent,
    ListadoTareasComponent,
    FiltradoTareasComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
