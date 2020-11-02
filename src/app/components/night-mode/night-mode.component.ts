import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NightModeService } from 'src/app/services/night-mode.service';

@Component({
	selector: 'app-night-mode',
	templateUrl: './night-mode.component.html',
	styleUrls: ['./night-mode.component.scss']
})
export class NightModeComponent implements OnInit {

	nightMode: boolean;
	nightModeSubscription: Subscription;

	constructor(private nightModeService: NightModeService) { }

	ngOnInit(): void {
		this.nightModeSubscription = this.nightModeService.nightModeSubject.subscribe(
			(nightMode: boolean) => {
				this.nightMode = nightMode;
			}
		);
		this.nightModeService.emitNightMode();
	}

	onChangeNightMode() {
		this.nightModeService.changeNightMode()
	}
}
