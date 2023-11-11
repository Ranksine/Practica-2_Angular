import { Component, OnInit } from '@angular/core';
import { Tarea } from './models/tarea.model';
import { MenuItem } from './models/menu-item.model';
import { TareaCardItem } from './models/tarea-card-item.model';
import { ActiveMenuItem } from './models/active-menu-item.model';
import { TareaStatus } from '../enum/tarea-status.enum';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})

export class MiComponenteComponent implements OnInit{
  // public menuItems: {item:string, active:boolean}[] = [];
  // Opciones para el menú
  activeMenuItem: MenuItem = { item: 'Mis tareas', active: false };
  activeMenuItemIndex: number = 1;
  // Lista de tareas guardadas
  tareas: Tarea[] = [];
  // Objeto para agregar tareas
  newTarea:Tarea={
    titulo:'simon',
    descripcion:'',
    status:TareaStatus.Pendiente
  };
  

  constructor() {}

  ngOnInit(): void {
    const tareasJson = localStorage.getItem("tareas");
    tareasJson !=null ? this.tareas = JSON.parse(tareasJson) : null;
  }

  // public setMenuItemAsActive(item: number): void {
  //   for (let x = 0; x<this.menuItems.length; x++){
  //     if (x == item){
  //       this.menuItems[x].active = true;
  //       continue;
  //     }
      
  //     this.menuItems[x].active = false;
  //   }
  // }

  public catchMenuItem(item: ActiveMenuItem): void {
    this.activeMenuItem = item.menuItem;
    this.activeMenuItemIndex = item.activeIndex;
    console.log("Item activo: ",this.activeMenuItemIndex);

  }

  catchOnStatusChange(info: TareaCardItem) {
    let { indice, tarea } = info;
    this.tareas[indice] = tarea;
    this.almacenarDatos();
  }

  catchOnAddTarea(tarea: Tarea) {
    this.tareas.push(tarea);
    // Navegar a la lista
    this.activeMenuItemIndex = 1;
    console.log("Item activo: ",this.activeMenuItemIndex);
    // Almacenar los datos
    this.almacenarDatos();
  }


  private almacenarDatos() : void {
    localStorage.setItem("tareas",JSON.stringify(this.tareas));
  }

}
