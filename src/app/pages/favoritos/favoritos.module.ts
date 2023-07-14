import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { FavoritosListComponent } from './favoritos-list/favoritos.component';
import { FavoritosRoutingModule } from './favoritos-routing.module';



@NgModule({
    declarations: [
        FavoritosListComponent,
    ],
    imports: [
        CommonModule,
        FavoritosRoutingModule
    ]
})
export class FavoritosModule { }
