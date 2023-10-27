import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { WrapperComponent } from './wrapper/wrapper.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, WrapperComponent],
  template: `
    <app-wrapper></app-wrapper>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
