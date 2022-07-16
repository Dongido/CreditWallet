import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanRoutingModule } from './loan-routing.module';
import { IncompleteActionComponent } from './incomplete-action/incomplete-action.component';
import { AwaitingDisbursementComponent } from './awaiting-disbursement/awaiting-disbursement.component';


@NgModule({
  declarations: [
    IncompleteActionComponent,
    AwaitingDisbursementComponent
  ],
  imports: [
    CommonModule,
    LoanRoutingModule
  ]
})
export class LoanModule { }
