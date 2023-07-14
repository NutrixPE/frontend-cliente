import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AlimentosListComponent } from './alimentos-list/alimentos.component';
import { AlimentosRoutingModule } from './alimentos-routing.module';


@NgModule({
    declarations: [
        AlimentosListComponent,
    ],
    imports: [
        CommonModule,
        AlimentosRoutingModule
    ]
})
export class AlimentosModule { }
