import {Component, input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
  }
})
export class ControlComponent {
  label = input.required<string>();

  // encapsulation defines if global styles or local styles will affect this component as well.
  // Another important thing in Angular, it's :host, also used in buttonComponent, it represents the component by itself
  // and is good for not showing or declaring a name style class. You will notice in css file, the ".control" name was replaced by :host
  // or another way for defining local style is leaving the configuration as ".control" and put that name on the "newTicketComponent" in the element "app-control"
}
