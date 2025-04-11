import {Component} from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <p>Nombre de usuario: {{ username }}</p>
    <p>{{ username }}'s favorite framework: {{ favoriteFramework }}</p>
    <label for="framework">Favorite Framework:</label>
  `,
  imports: [],
})
export class UserComponent {
  username = 'youngTech';
  favoriteFramework = '';
}
