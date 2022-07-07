import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GearComponent } from './gear/gear.component';
import { SkillsComponent } from './skills/skills.component';
import { WeaponsComponent } from './weapons/weapons.component';

const routes: Routes = [
  { path: 'skills', component: SkillsComponent },
  { path: 'skills/:codeData', component: SkillsComponent },
  { path: 'weapons', component: WeaponsComponent },
  { path: 'weapons/:codeData', component: WeaponsComponent },
  { path: 'gear', component: GearComponent },
  { path: '', redirectTo: 'skills', pathMatch: 'full' },
  { path: ':codeData', redirectTo: 'skills/:codeData', pathMatch: 'full' },
  { path: '**', redirectTo: 'skills', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
