import { Component, Output, EventEmitter} from '@angular/core'
import { MenuItem } from '../mi-componente/models/menu-item.model';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})

export class MenuComponent {
    menuItems: MenuItem[] = [];

    @Output("onMenuItemActiveChange") emitter : EventEmitter<MenuItem>;

    constructor() {
        // let item1:MenuItem = {item:"", active:false};
        // this.menuItems.push(item1);
        this.menuItems.push({item: 'Nueva tarea', active: false});
        this.menuItems.push({item: 'Mis tareas', active: true});

        this.emitter = new EventEmitter<MenuItem>();
      }

      public setMenuItemAsActive(miPichula: number): void {
        for (let x =0 ; x<this.menuItems.length; x++) {
          if(x == miPichula){ //miPichula es el parametro de item que recibe el metodo
            this.menuItems[x].active = true;
            this.emitter.emit(this.menuItems[x]);
            continue;
          }
            this.menuItems[x].active = false;
          
        }
      }
}

