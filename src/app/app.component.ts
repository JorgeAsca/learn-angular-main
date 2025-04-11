import {Component} from '@angular/core';
import {UserComponent} from './user.component';
import { PuntounoComponent } from './puntouno/puntouno.component';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  template: ` 
   <!-- usamos el comonete uno para el pirmer ejercicio -->
  <app-puntouno></app-puntouno>
  `,

  
  imports: [UserComponent, PuntounoComponent],
})
export class AppComponent {
isUserLogin= true;
users = [
  {id: 0, name: 'Sarah'},
  {id: 1, name: 'Amy'},
  {id: 2, name: 'Rachel'},
  {id: 3, name: 'Jessica'},
  {id: 4, name: 'Poornima'},
];
isEditable = false;  
message  = '';

onMouseOver() {
  this.message = 'Way to go 🚀';
}
}
