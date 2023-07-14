import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VexRoutes } from 'src/@vex/interfaces/vex-route.interface';
import { FavoritosListComponent } from './favoritos-list/favoritos.component';

const routes: VexRoutes = [
    {
        path: '',
        component: FavoritosListComponent,
        data: {
            scrollDisabled: true,
            toolbarShadowEnabled: true
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FavoritosRoutingModule { }
