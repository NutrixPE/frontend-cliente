import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReseñasListComponent } from './reseñas-list/reseñas-list.component';
import { ReseñasRoutingModule } from './reseñas-routing.module';

@NgModule({
    declarations: [
        ReseñasListComponent,
    ],
    imports: [
        CommonModule,
        ReseñasRoutingModule
    ]
})
export class ReseñasModule { }
