import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [CommonModule, MenuComponent, MainComponent],
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css'],
})
export class WrapperComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
