import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IncompleteActionComponent} from './incomplete-action/incomplete-action.component';
import {AwaitingDisbursementComponent} from './awaiting-disbursement/awaiting-disbursement.component'

const routes: Routes = [
  {path:'incomplete-action', component:IncompleteActionComponent},
  {path:'awaiting-disbursement', component:AwaitingDisbursementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanRoutingModule { }
