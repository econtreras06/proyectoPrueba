import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "proyectoPrueba";
  nombre: string = "Elen";

  persona = {
    nombre: "Juanito",
    edad: 15
  }

  imagen = './../assets/imagenPrueba.png'

  isDisabled: boolean = false;

  nombreForm: string = "Natalia"

  contador: number = 0

  onClick() {
    alert('Hola, desde la vista')
  }

  incrementar() {
    this.contador++;
  }

  disminuir() {
    this.contador--;
  }


}
