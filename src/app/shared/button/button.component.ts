import { Component } from '@angular/core';

// this a new kind of selector, you can define one for managing any element that has a property appButton.
// actually any element with this property will be controlled by this component ButtonComponent
@Component({
  selector: 'button[appButton], a[appButton]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
// Another important concept is, every component has your own component
}
