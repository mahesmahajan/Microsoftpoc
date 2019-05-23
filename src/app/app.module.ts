import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule, ExcelModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { PopupModule } from '@progress/kendo-angular-popup';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { IntlModule } from '@progress/kendo-angular-intl';
import { MenuModule } from '@progress/kendo-angular-menu';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { ToolBarModule } from '@progress/kendo-angular-toolbar';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PulishedPORSComponent } from './pulished-pors/pulished-pors.component';
import { DraftComponent } from './draft/draft.component';
import { LoginComponent } from './login/login.component';
import {Page5Component} from './page5/page5.component';
import {Page6Component} from './page6/page6.component';

@NgModule({
  declarations: [
    AppComponent,
    PulishedPORSComponent,
    LoginComponent,
    Page5Component,
    Page6Component,
    DraftComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    GridModule,
    ExcelModule,
    AppRoutingModule,
    FormsModule,
    TooltipModule,
    ButtonsModule,
    DropDownsModule,
    DateInputsModule,
    PopupModule,
    DialogsModule,
    IntlModule,
    MenuModule,
    ToolBarModule,
    InputsModule,
    LayoutModule,
    ChartsModule,
    SimpleNotificationsModule.forRoot(),
    TreeViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
