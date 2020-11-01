import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from 'src/app/services/language.service';
import DataUtils from 'src/app/utils/data.utils';

@Component({
	selector: 'app-bio',
	templateUrl: './bio.component.html',
	styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {

	bioArray: Array<string>;
	languageSubscription: Subscription;

	constructor(private languageService: LanguageService) { }

	ngOnInit(): void {
		this.languageSubscription = this.languageService.languageSubject.subscribe(
			(lang) => {
				if(lang === "FR") {
					this.bioArray = DataUtils.bioFR;
				}
				else if(lang === "EN") {
					this.bioArray = DataUtils.bioEN;
				}
			}
		);
		this.languageService.emitLanguage();
	}

}
