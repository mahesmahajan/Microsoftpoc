import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataResult, process, State } from '@progress/kendo-data-query';
import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { PORDATA } from '../../assets/Dummydata';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pulished-pors',
  templateUrl: './pulished-pors.component.html',
  styleUrls: ['./pulished-pors.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PulishedPORSComponent implements OnInit {
  private Tempstorage: any = PORDATA;
  public ErrMessage: any = '';
  public ErrorNtf: boolean = false;
  public CreateDataList: any = [];
  public gridState: State = {
    sort: [],
    skip: 0,
    take: 50
  };
  public gridData: GridDataResult = process(this.CreateDataList, this.gridState);
  public loading: boolean = false;

  constructor(private router:Router) { }

  ngOnInit() {
    this.GetData();
  }

  navigateToDraft() {
    this.router.navigateByUrl('Draft');
  }

  public GetData() {
    this.loading = true;
    this.CreateDataList = this.Tempstorage;
    this.gridData = process(this.CreateDataList, this.gridState);
    this.loading = false;
  }

  public open(DocumentKey: any) {
    this.ErrMessage = JSON.stringify("Just for the DEMO");
    this.ErrorNtf = true;
  }

  public onStateChange(state: DataStateChangeEvent) {
    this.loading = true;
    this.gridState = state;
    this.gridData = process(this.CreateDataList, this.gridState);
    this.loading = false;
  }

  public closeConfirm() {
    this.ErrorNtf = false;
  }

}
