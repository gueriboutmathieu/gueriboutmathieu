import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from 'src/app/services/language.service';
import DataUtils from "../../utils/data.utils";

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

	footerText: string;
	languageSubscription: Subscription;

	constructor(private languageService: LanguageService) { }

	ngOnInit(): void {
		this.footerText = DataUtils.footerFR;

		this.languageSubscription = this.languageService.languageSubject.subscribe(
			(lang: string) => {
				this.footerText = DataUtils['footer' + lang];
			}
		);
		this.languageService.emitLanguage();
	}

}
