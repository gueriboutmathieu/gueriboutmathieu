import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LanguageService } from 'src/app/services/language.service';
import { NightModeService } from 'src/app/services/night-mode.service';
import DataUtils from "../../utils/data.utils";

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

	routes: Array<Array<string>>;
	currentRoute: string;
	languageSubscription: Subscription;

	nightMode: boolean;
	nightModeSubscription: Subscription;

	constructor(private router: Router, private languageService: LanguageService, private nightModeService: NightModeService) { }

	ngOnInit(): void {
		this.currentRoute = "";

		this.languageSubscription = this.languageService.languageSubject.subscribe(
			(lang) => {
				if(lang === "FR"){
					this.routes = DataUtils.navbarViewsFR;
				}
				else if(lang === "EN") {
					this.routes = DataUtils.navbarViewsEN;
				}
			}
		);
		this.languageService.emitLanguage();

		this.nightModeSubscription = this.nightModeService.nightModeSubject.subscribe(
			(nightMode: boolean) => {
				this.nightMode = nightMode;
			}
		);
		this.nightModeService.emitNightMode();
	}

	goToRoute(route: string) {
		this.router.navigate([route]);

		if(route !== "home") {
			this.currentRoute = route;
		}
		else {
			this.currentRoute = "";
		}
	}

}
