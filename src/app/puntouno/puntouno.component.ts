import { Component } from '@angular/core';

@Component({
  selector: 'app-puntouno',
  imports: [],
  template: `
    <p>
      Hello {{ city }}
    </p>
  `,
  styles: `
  :host {
    color: #a144eb
  }
  `
})
export class PuntounoComponent {

}
