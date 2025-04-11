import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <p>El monbre de usuario es {{ name }}</p>
  `,
})
export class UserComponent {
  @Input() name = '';
}
