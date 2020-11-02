import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from 'src/app/services/language.service';
import { NightModeService } from 'src/app/services/night-mode.service';
import DataUtils from 'src/app/utils/data.utils';

@Component({
	selector: 'app-skills',
	templateUrl: './skills.component.html',
	styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

	skillsFields: Array<Array<Array<string>>>;
	fieldLabels: Array<string>;

	webSkills: Array<Array<string>>;
	mobileSkills: Array<Array<string>>;
	tools: Array<Array<string>>;
	softSkills: Array<Array<string>>;
	futureSkills: Array<Array<string>>;

	nightMode: boolean;
	nightModeSubscription: Subscription;

	currentLanguage: string;
	languageSubscription: Subscription;

	constructor(private nightModeService: NightModeService, private languageService: LanguageService) { }

	ngOnInit(): void {
		this.skillsFields = new Array();

		this.webSkills = DataUtils.webSkills;
		this.mobileSkills = DataUtils.mobileSkills;
		this.tools = DataUtils.tools;

		this.nightModeSubscription = this.nightModeService.nightModeSubject.subscribe(
			(nightMode: boolean) => {
				this.nightMode = nightMode;
			}
		);
		this.nightModeService.emitNightMode();

		this.languageSubscription = this.languageService.languageSubject.subscribe(
			(lang: string) => {
				this.fieldLabels = DataUtils["fieldLabels" + lang];

				this.softSkills = DataUtils["softSkills" + lang];
				this.futureSkills = DataUtils["futureSkills" + lang];

				this.initSkillsFields();
			}
		);
		this.languageService.emitLanguage();

		this.initSkillsFields();
	}

	initSkillsFields(){
		this.skillsFields = [this.webSkills, this.mobileSkills, this.tools, this.softSkills, this.futureSkills];
	}

}
