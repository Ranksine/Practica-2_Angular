import { Component} from "@angular/core"
import { Tarea } from "../mi-componente/models/tarea.model";

@Component({
    selector: 'app-tarea-card',
    templateUrl: './tarea-card.component.html'
})

export class TareaCardComponent {
    tareas: Tarea[] =[];

    cambiarStatus(index: number, status: string): void {
        
    }
}