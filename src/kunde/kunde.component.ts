import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DetailsComponent } from '../details/details.component';
import { ContentComponent } from '../content/content.component';

@Component({
  selector: 'app-kunde',
  standalone: true,
  imports: [CommonModule, ContentComponent, DetailsComponent],
  templateUrl: './kunde.component.html',
  styleUrls: ['./kunde.component.css'],
})
export class KundeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
