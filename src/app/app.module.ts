import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule } from "@angular/material/button";

import { SkillsComponent } from './skills/skills.component';
import { WeaponsComponent } from './weapons/weapons.component';
import { GearComponent } from './gear/gear.component';


@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    WeaponsComponent,
    GearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
