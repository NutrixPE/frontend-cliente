import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VexRoutes } from 'src/@vex/interfaces/vex-route.interface';
import { ReseñasListComponent } from './reseñas-list/reseñas-list.component';


const routes: VexRoutes = [
    {
        path: '',
        component: ReseñasListComponent,
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
export class ReseñasRoutingModule { }
