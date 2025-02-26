import { Component, Input} from '@angular/core';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-encuesta-empresa',
  templateUrl: './encuesta-empresa.component.html',
  styleUrl: './encuesta-empresa.component.css',
})
export class EncuestaEmpresaComponent {
  @Input() title: string = "";
  @Input() subtitle: string = "";
}
