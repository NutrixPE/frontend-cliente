import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VexRoutes } from 'src/@vex/interfaces/vex-route.interface';
import { PlanAlimenticioListComponent } from './plan-alimenticio-list/plan-alimenticio-list.component';

const routes: VexRoutes = [
    {
        path: '',
        component: PlanAlimenticioListComponent,
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
export class PlanAlimenticioRoutingModule { }
