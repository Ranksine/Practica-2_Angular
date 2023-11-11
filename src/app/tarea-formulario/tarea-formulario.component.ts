import { Component, EventEmitter, Output } from "@angular/core";
import { Tarea } from '../mi-componente/models/tarea.model';
import { TareaStatus } from "../enum/tarea-status.enum";

@Component({//Todo componente obligatoriamente tiene que tener un selector y un template o templateUrl, style es opcional\\
    selector: 'app-tarea-formulario',
    templateUrl: './tarea-formulario.component.html',
})

export class TareaFormualrioComponent {
    @Output("onAddTarea") emitter: EventEmitter<Tarea>;

    constructor() {
        this.emitter = new EventEmitter();
    }

    emitirTarea(titulo: string, descripcion: string): void {
        const tarea: Tarea = {
            titulo,
            descripcion,
            status: TareaStatus.Pendiente
        };
        this.emitter.emit(tarea);
    }
}