import {Component} from '@angular/core';
import {UserComponent,} from './user.component';
import {PuntoCuatroComponent} from './punto-cuatro/punto-cuatro.component';
import { p } from '@angular/core/weak_ref.d-Bp6cSy-X';
@Component({

  selector: 'app-root',
  standalone: true,
  imports: [PuntoCuatroComponent],
  // styleUrls: ['app.component.css'],
  // Punto uno meodificado de template 
  template: `
  <!-- Punto 4 flujo de control entre  comonentes -->
  @if (isServerRunning) {
    <span>Server is running</span>
  } @else {
    <span>Server is not running</span>
  }
   `,
   
    // <!-- punto dos --->
    // username: {{ username }} 
    // Hello {{ city }}, {{1 + 1}}
  

  
  // <!-- imports: [UserComponent], -->
  
})

// punto dos agregando una propiedad a la clase
export class AppComponent {
  // Se agrego la propiedad isServerRunning para el punto 4
  isServerRunning = true;
  username = 'Jorge asca';
  city = 'San Francisco';
}


