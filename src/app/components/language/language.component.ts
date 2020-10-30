import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from 'src/app/services/language.service';

@Component({
	selector: 'app-language',
	templateUrl: './language.component.html',
	styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

	currentFlag: string;
	languageSubscription: Subscription;

	constructor(private languageService: LanguageService) { }

	ngOnInit(): void {
		this.languageSubscription = this.languageService.currentLanguageSubject.subscribe(
			(lang) => {
				this.currentFlag = lang;
			}
		);
		this.languageService.emitLanguage();
	}

	onChangeLanguage() {
		this.languageService.changeLanguage();
	}
}
