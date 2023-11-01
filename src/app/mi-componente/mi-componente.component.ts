import { Component, OnInit } from '@angular/core';
import { MenuItem } from './models/menu-item.model';
import { Tarea } from './models/tarea.model';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent implements OnInit{
  // public menuItems: {item:string, active:boolean}[] = [];
  // Opciones para el menú
  activeMenuItem: MenuItem = {item: 'Mis tareas', active: false};
  // Lista de tareas guardadas
  tareas: Tarea[] = [];
  // Objeto para agregar tareas
  newTarea:Tarea={
    titulo:'perrin',
    descripcion:'',
    status:'Pendiente'
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

  public catchMenuItem(item: MenuItem): void {
    this.activeMenuItem = item;
  }

  public cambiarStatus(index:number, status: string): void {
    this.tareas[index].status = status;
    this.almacenarDatos();
  }


  private almacenarDatos() : void {
    localStorage.setItem("tareas",JSON.stringify(this.tareas));
  }

}
