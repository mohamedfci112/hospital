import { Component, OnInit } from '@angular/core';
import { SimpleSmoothScrollService } from 'ng2-simple-smooth-scroll';
import { SimpleSmoothScrollOption } from 'ng2-simple-smooth-scroll';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private smooth: SimpleSmoothScrollService) { }

  ngOnInit(): void {
    this.smooth.smoothScrollToAnchor();
  }

  // tslint:disable-next-line:typedef
  goTop(){
    this.smooth.smoothScrollToTop({ duration: 1000, easing: 'linear' });
  }

}
