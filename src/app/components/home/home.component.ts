import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;

  opened!: boolean;

  constructor() { }

  ngOnInit() {
  }

  clickHandler() {
    this.sidenav?.close();
  }
}
