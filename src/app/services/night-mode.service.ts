import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
    providedIn: "root"
})
export class NightModeService {

    nightMode: boolean;
    nightModeSubject: Subject<boolean>;

    constructor() {
        this.nightMode = true;
        this.nightModeSubject = new Subject<boolean>();
        this.emitNightMode();
    }

    emitNightMode() {
        this.nightModeSubject.next(this.nightMode);
    }

    changeNightMode() {
        this.nightMode = !this.nightMode;
        this.emitNightMode();
    }
}