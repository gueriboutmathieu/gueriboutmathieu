import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from 'src/app/services/language.service';
import DataUtils from "../../utils/data.utils";

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	welcome: Array<string>;

	welcomeSubscription: Subscription;

	constructor(private languageService: LanguageService) { }

	ngOnInit(): void {
		this.welcomeSubscription = this.languageService.languageSubject.subscribe(
			(lang: string) => {
				this.welcome = DataUtils['welcome' + lang];
			}
		);
		this.languageService.emitLanguage();
	}

}
