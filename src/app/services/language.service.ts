import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: "root"
})
export class LanguageService {
    
    currentLanguage: string;
    currentLanguageSubject: Subject<string>;

    constructor() {
        this.currentLanguage = "FR";
        this.currentLanguageSubject = new Subject<string>();
        this.emitLanguage();
    }

    emitLanguage() {
        this.currentLanguageSubject.next(this.currentLanguage);
    }

    changeLanguage() {
        if(this.currentLanguage === "FR") {
            this.currentLanguage = "EN";
        }
        else if(this.currentLanguage === "EN") {
            this.currentLanguage = "FR";
        }
        this.emitLanguage();
    }
}