import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ContentComponent } from '../content/content.component';
import { BcComponent } from '../bc/bc.component';
import { KundeComponent } from '../kunde/kunde.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, BcComponent, ContentComponent, KundeComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
