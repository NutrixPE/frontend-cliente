import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PlanAlimenticioListComponent } from './plan-alimenticio-list/plan-alimenticio-list.component';
import { PlanAlimenticioRoutingModule } from './plan-alimenticio-routing.module';


@NgModule({
    declarations: [
        PlanAlimenticioListComponent,
    ],
    imports: [
        CommonModule,
        PlanAlimenticioRoutingModule
    ]
})
export class PlanAlimenticioModule { }
