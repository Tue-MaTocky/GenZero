import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

// https://www.npmjs.com/package/@angular/fire
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
// https://github.com/angular/angularfire/blob/HEAD/docs/analytics/getting-started.md
// import { AngularFireAnalyticsModule, ScreenTrackingService } from '@angular/fire/compat/analytics';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule } from "@angular/material/button";
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';

import { SkillsComponent } from './skills/skills.component';
import { WeaponsComponent } from './weapons/weapons.component';
import { GearComponent } from './gear/gear.component';

import { RightClickDirective } from './directives/right-click.directive';
import { CloakDirective } from './directives/cloak.directive';

import { SkillButtonComponent } from './components/skill-button/skill-button.component';

@NgModule({
  declarations: [
    AppComponent,
    // Pages
    SkillsComponent,
    WeaponsComponent,
    GearComponent,
    // Directives
    RightClickDirective,
    CloakDirective,
    // Components
    SkillButtonComponent
  ],
  imports: [
    provideFirebaseApp(()=> initializeApp(environment.firebase)),
    // AngularFireAnalyticsModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ],
  providers: [
    // ScreenTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
