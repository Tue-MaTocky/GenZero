import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GearComponent } from './gear/gear.component';
import { SkillsComponent } from './skills/skills.component';
import { WeaponsComponent } from './weapons/weapons.component';

const routes: Routes = [{
  path: 'gen-zero',
  children: [
  { path: 'skills', component: SkillsComponent },
  { path: 'skills/:codeData', component: SkillsComponent },
  { path: 'weapons', component: WeaponsComponent },
  { path: 'gear', component: GearComponent },
  { path: '', redirectTo: 'gen-zero/skills', pathMatch: 'full' },
  { path: '**', redirectTo: 'gen-zero/skills', pathMatch: 'full' }
  ],
},
{ path: '', redirectTo: 'gen-zero/skills', pathMatch: 'full' },
{ path: '**', redirectTo: 'gen-zero/skills', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
