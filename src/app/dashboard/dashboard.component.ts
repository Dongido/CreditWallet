import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

export interface PeriodicElement {
  day: string;
  noOfLoan: string;
  amount: number;
  index: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {day: 'july 14 2022', noOfLoan: '10 Applicants', amount: 4000, index: -2000},
  {day: 'july 11 2022', noOfLoan: '29 Applicants', amount: 73800, index: 1200},
  {day: 'july 10 2022', noOfLoan: '78 Applicants', amount: 35500, index: -3100},
  {day: 'july 03 2022', noOfLoan: '540 Applicants', amount: 9000, index: 897},
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 80;

  displayedColumns: string[] = ['day', 'noOfLoan', 'amount', 'index'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
