import { Component, OnInit } from '@angular/core';
import { Skill, skillData } from '../data/skillData';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  readonly SkillBarSize = 20;
  readonly MaxSkill = 30;
  readonly MinSkill = 0;
  skillCount = 0;
  skillProgress = -1;
  skills = skillData;
  skillView = this.skills.combat.left[0];

  constructor() { }

  ngOnInit(): void { }

  addSkill(): void {
    this.skillCount += this.skillCount < this.MaxSkill ? 1 : 0;
    this.skillProgress = (this.skillCount - 1) / this.MaxSkill;
  }

  removeSkill(): void {
    this.skillCount -= this.skillCount > this.MinSkill ? 1 : 0;
    this.skillProgress = (this.skillCount - 1) / this.MaxSkill;
  }

  updateView(skill: Skill) {
    this.skillView = skill;
  }

  get SkillBarList(): number[] {
    return new Array(this.SkillBarSize);
  }

  barProgressHighlight(value: number): boolean {
    const barProgress = value / this.SkillBarSize;
    return (this.skillProgress - barProgress) >= 0;
  }

  mainImg(file: string): string {
    return `/assets/img/skills_main_img/${file}`;
  }
}
