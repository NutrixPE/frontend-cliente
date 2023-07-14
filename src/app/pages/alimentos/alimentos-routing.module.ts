import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VexRoutes } from 'src/@vex/interfaces/vex-route.interface';
import { AlimentosListComponent } from './alimentos-list/alimentos.component';
const routes: VexRoutes = [
    {
        path: '',
        component: AlimentosListComponent,
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
export class AlimentosRoutingModule { }
