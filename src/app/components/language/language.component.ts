import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from 'src/app/services/language.service';
import { NightModeService } from 'src/app/services/night-mode.service';

@Component({
	selector: 'app-language',
	templateUrl: './language.component.html',
	styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

	currentFlag: string;
	languageSubscription: Subscription;

	nightMode: boolean;
	nightModeSubscription: Subscription;

	constructor(private languageService: LanguageService, private nightModeService: NightModeService) { }

	ngOnInit(): void {
		this.languageSubscription = this.languageService.languageSubject.subscribe(
			(lang) => {
				this.currentFlag = lang;
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

	onChangeLanguage() {
		this.languageService.changeLanguage();
	}
}
