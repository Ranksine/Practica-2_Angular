import { Component, Input, EventEmitter, Output } from "@angular/core"
import { Tarea } from "../mi-componente/models/tarea.model";
import { TareaCardItem } from '../mi-componente/models/tarea-card-item.model';
import { TareaStatus } from "src/app/enum/tarea-status.enum"

@Component({
    selector: 'app-tarea-card',
    templateUrl: './tarea-card.component.html'
})

export class TareaCardComponent {
    @Input()
    tarea!: Tarea;
    @Input()
    indice: number = -1;

    @Output("onStatusChange") emitter: EventEmitter<TareaCardItem>;
    tareaStatus = {
        Completado: TareaStatus.Completado,
        Retrasado: TareaStatus.Retrasado,
        Pendiente: TareaStatus.Pendiente

    }

    constructor() {
        this.emitter = new EventEmitter();
    }


    cambiarStatus(status: TareaStatus ): void {
        this.tarea.status = status;

        this.emitter.emit({
            indice: this.indice,
            tarea: this.tarea
        });
    }
}