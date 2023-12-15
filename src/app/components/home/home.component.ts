import { Component, ViewChild , ViewEncapsulation} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;
  public isCollapsed = true;
  opened!: boolean;

  constructor() { }

  ngOnInit() {
  }

  clickHandler() {
    this.sidenav?.close();
  }


  // image slider added in the home component

  imageObject = [{
    image:'assets/Images/Home/eight.jpg',
    thumbImage: 'assets/Images/Home/eight.jpg',
    title: 'amazing creatures'
 },
 {
  image: 'assets/Images/Home/eight.jpg',
  thumbImage: 'assets/Images/Home/eight.jpg',
  title: 'amazing creatures'
},{
  image: 'assets/Images/Home/eight.jpg',
  thumbImage: 'assets/Images/Home/eight.jpg',
  title: 'amazing creatures'
}];


//image slider ends
}
