import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PulishedPORSComponent } from './pulished-pors/pulished-pors.component';
import { DraftComponent } from './draft/draft.component';
import { LoginComponent } from './login/login.component';
import {Page5Component} from './page5/page5.component';
import {Page6Component} from './page6/page6.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'Publish', component: PulishedPORSComponent },
  { path: 'Draft', component: DraftComponent },
  { path: 'login', component: LoginComponent },
  { path: 'page5', component: Page5Component },
  { path: 'page6', component: Page6Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
