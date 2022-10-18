import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  options = { fullWidth: false };
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    // no errors
    let elems = document.querySelectorAll('.carousel');
    let instances = M.Carousel.init(elems, this.options);
  }
}
