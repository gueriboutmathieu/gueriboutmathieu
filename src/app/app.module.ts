import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BioComponent } from './components/bio/bio.component';
import { SkillsComponent } from './components/skills/skills.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { EducationComponent } from './components/education/education.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GalaxyComponent } from './components/galaxy/galaxy.component';
import { LanguageComponent } from './components/language/language.component';
import { LanguageService } from './services/language.service';
import { NightModeService } from './services/night-mode.service';
import { NightModeComponent } from './components/night-mode/night-mode.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BioComponent,
    SkillsComponent,
    WorkExperienceComponent,
    EducationComponent,
    AchievementsComponent,
    HobbiesComponent,
    ContactComponent,
    NavbarComponent,
    GalaxyComponent,
    LanguageComponent,
    NightModeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    LanguageService,
    NightModeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
