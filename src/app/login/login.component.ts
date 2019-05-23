import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router';
import { PulishedPORSComponent } from '../pulished-pors/pulished-pors.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  navigateToPublish() {
    this.router.navigateByUrl('Publish');
 }

  ngOnInit() {
  }
}
