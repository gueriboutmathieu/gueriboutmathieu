import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LanguageService } from 'src/app/services/language.service';
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

	constructor(private router: Router, private languageService: LanguageService) { }

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
