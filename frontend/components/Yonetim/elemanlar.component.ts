import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-elemanlar',
  standalone: true,
  imports: [CommonModule],
  template:`<h1>Elemanlar</h1>`
})
export class ElemanlarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
