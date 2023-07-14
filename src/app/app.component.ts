import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, LOCALE_ID, Renderer2 } from '@angular/core';
import { Settings } from 'luxon';
import { ConfigService } from '../@vex/services/config.service';
import { NavigationService } from '../@vex/services/navigation.service';

import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ActivatedRoute } from '@angular/router';
import icDashboard from '@iconify/icons-ic/twotone-dashboard';
import { filter, map } from 'rxjs/operators';
import { ConfigName } from '../@vex/interfaces/config-name.model';
import { Style, StyleService } from '../@vex/services/style.service';

@Component({
	selector: 'vex-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'vex';

	constructor(private configService: ConfigService,
		private styleService: StyleService,
		private renderer: Renderer2,
		private platform: Platform,
		@Inject(DOCUMENT) private document: Document,
		@Inject(LOCALE_ID) private localeId: string,
		private route: ActivatedRoute,
		private navigationService: NavigationService) {
		Settings.defaultLocale = this.localeId;

		if (this.platform.BLINK) {
			this.renderer.addClass(this.document.body, 'is-blink');
		}

		this.configService.updateConfig({
			sidenav: {
				title: "PANEL CLIENTE",
				imageUrl: "/assets/img/demo/LOGO_N.png",
				showCollapsePin: true,
			},
		});

		this.route.queryParamMap.pipe(
			map(queryParamMap => queryParamMap.has('rtl') && coerceBooleanProperty(queryParamMap.get('rtl'))),
		).subscribe(isRtl => {
			this.document.body.dir = isRtl ? 'rtl' : 'ltr';
			this.configService.updateConfig({
				rtl: isRtl
			});
		});

		this.route.queryParamMap.pipe(
			filter(queryParamMap => queryParamMap.has('layout'))
		).subscribe(queryParamMap => this.configService.setConfig(queryParamMap.get('layout') as ConfigName));

		this.route.queryParamMap.pipe(
			filter(queryParamMap => queryParamMap.has('style'))
		).subscribe(queryParamMap => this.styleService.setStyle(queryParamMap.get('style') as Style));


		this.navigationService.items = [
			// {
			// 	type: 'link',
			// 	label: 'Dashboard',
			// 	route: 'estadisticas',
			// 	icon: icDashboard
			// },
			{
				type: 'link',
				label: 'Alimentos',
				route: 'alimentos',
				icon: icDashboard
			},
			{
				type: 'link',
				label: 'Mi plan alimenticio',
				route: 'plan-alimenticio',
				icon: icDashboard
			},
			{
				type: 'link',
				label: 'Mis Favoritos',
				route: 'favoritos',
				icon: icDashboard
			}
			, {
				type: 'link',
				label: 'Reseñas',
				route: 'reseñas',
				icon: icDashboard
			}
		];
	}
}