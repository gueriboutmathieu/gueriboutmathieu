import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: "root"
})
export class LanguageService {
    
    language: string;
    languageSubject: Subject<string>;

    constructor() {
        this.language = "FR";
        this.languageSubject = new Subject<string>();
        this.emitLanguage();
    }

    emitLanguage() {
        this.languageSubject.next(this.language);
    }

    changeLanguage() {
        if(this.language === "FR") {
            this.language = "EN";
        }
        else if(this.language === "EN") {
            this.language = "FR";
        }
        this.emitLanguage();
    }
}