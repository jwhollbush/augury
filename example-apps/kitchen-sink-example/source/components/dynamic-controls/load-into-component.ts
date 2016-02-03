import {Component, DynamicComponentLoader, ElementRef} from 'angular2/core';
import DynamicComponent from './dynamic-component';
import Hello from './hello';

@Component({
  selector: 'load-into-component',
  directives: [
    Hello
  ],
  template: `
    <div class="wrapper">
      <h4>LoadIntoLocation Component</h4>
      <button (click)="loadComponent()">Load Component</button>
      <div #anchor></div>
    </div>`
})
export default class LoadIntoComponent {
  constructor(private dcl: DynamicComponentLoader,
    private elementRef: ElementRef) {

  }

  loadComponent() {
    this.dcl.loadIntoLocation(DynamicComponent, this.elementRef, 'anchor')
      .then(componentRef => console.log('loadIntoLocation', componentRef));
  }
}
