import { Component} from "@angular/core"

@Component({//Todo componente obligatoriamente tiene que tener un selector y un template o templateUrl, style es opcional\\
    selector: 'app-tarea-formulario',
    templateUrl: './tarea-formulario.component.html',
})

export class TareaFormualrioComponent {
    emitirTarea( titulo: String, descripcion: String): void {

    }
}