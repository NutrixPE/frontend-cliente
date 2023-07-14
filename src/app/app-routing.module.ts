import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { VexRoutes } from 'src/@vex/interfaces/vex-route.interface';
import { CustomLayoutComponent } from './custom-layout/custom-layout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const childrenRoutes: VexRoutes = [
	{
		path: 'estadisticas',
		loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
		data: {
			containerEnabled: true
		}
	},
	{
		path: 'alimentos',
		loadChildren: () => import('./pages/alimentos/alimentos.module').then(m => m.AlimentosModule),
		data: {
			containerEnabled: true
		}
	},
	{
		path: 'plan-alimenticio',
		loadChildren: () => import('./pages/plan-alimenticio/plan-alimenticio.module').then(m => m.PlanAlimenticioModule),
		data: {
			containerEnabled: true
		}
	},
	{
		path: 'favoritos',
		loadChildren: () => import('./pages/favoritos/favoritos.module').then(m => m.FavoritosModule),
		data: {
			containerEnabled: true
		}
	},
	{
		path: 'reseñas',
		loadChildren: () => import('./pages/reseñas/reseñas.module').then(m => m.ReseñasModule),
		data: {
			containerEnabled: true
		}
	},
	{
		path: '**',
		component: NotFoundComponent
	}
];

const routes: VexRoutes = [
	{
		path: '',
		redirectTo: 'estadisticas',
		pathMatch: 'full'
	},
	{
		path: '',
		redirectTo: 'alimentos',
		pathMatch: 'full'
	},
	{
		path: '',
		redirectTo: 'plan-alimenticio',
		pathMatch: 'full'
	},
	{
		path: '',
		redirectTo: 'favoritos',
		pathMatch: 'full'
	},
	{
		path: '',
		redirectTo: 'reseñas',
		pathMatch: 'full'
	},
	{
		path: '',
		component: CustomLayoutComponent,
		children: childrenRoutes,
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {
		preloadingStrategy: PreloadAllModules,
		scrollPositionRestoration: 'enabled',
		relativeLinkResolution: 'corrected',
		anchorScrolling: 'enabled'
	})],
	exports: [RouterModule]
})
export class AppRoutingModule {
}