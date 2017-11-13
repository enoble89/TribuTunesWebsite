import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomePageComponent implements OnInit {

  title = 'Home'
  subtitle = 'Welcome Home!'
  content = 'Some home content.'

  constructor() { }

  ngOnInit() {
  }

}
