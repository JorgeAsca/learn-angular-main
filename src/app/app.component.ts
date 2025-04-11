import {Component} from '@angular/core';
import {UserComponent,} from './user.component';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  // Punto uno meodificado de template 
  template: `
    <!-- punto dos --->
    username: {{ username }} 
    Hello {{ city }}, {{1 + 1}}
  `,

  
  imports: [UserComponent],
})

// punto dos agregando una propiedad a la clase
export class AppComponent {
  username = 'Jorge asca';
  city = 'San Francisco';
}


