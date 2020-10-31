import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AchievementsComponent } from './components/achievements/achievements.component';
import { BioComponent } from './components/bio/bio.component';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { HomeComponent } from './components/home/home.component';
import { SkillsComponent } from './components/skills/skills.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent,
    data: { routeIdx: 0 }
  },
  {
    path: "bio",
    component: BioComponent,
    data: { routeIdx: 1 }
  },
  {
    path: "skills",
    component: SkillsComponent,
    data: { routeIdx: 2 }
  },
  {
    path: "work-experience",
    component: WorkExperienceComponent,
    data: { routeIdx: 3 }
  }, 
  {
    path: "education",
    component: EducationComponent,
    data: { routeIdx: 4 }
  },
  {
    path: "achievements",
    component: AchievementsComponent,
    data: { routeIdx: 5 }
  },
  {
    path: "hobbies",
    component: HobbiesComponent,
    data: { routeIdx: 6 }
  },
  {
    path: "contact",
    component: ContactComponent,
    data: { routeIdx: 7 }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
