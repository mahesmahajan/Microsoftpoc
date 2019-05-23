import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page5',
  templateUrl: './page5.component.html',
  styleUrls: ['./page5.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Page5Component implements OnInit {

  constructor(private router: Router) { }

  naviGateToPub(){
    this.router.navigateByUrl('page6');
  }

  ngOnInit() {
  }
}
