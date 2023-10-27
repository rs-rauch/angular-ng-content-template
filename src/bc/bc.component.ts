import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bc',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bc.component.html',
  styleUrls: ['./bc.component.css']
})
export class BcComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}