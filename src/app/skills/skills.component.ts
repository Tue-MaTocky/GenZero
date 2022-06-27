import { Component, OnInit } from '@angular/core';
import { Skill, skillData } from '../data/skillData';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  readonly SkillBarSize = 20;
  readonly MaxSkill = 30;
  skillCount = 0;
  skillProgress = -1;
  skills = skillData;
  skillView = this.skills.combat.left[0];
  specialList: Skill[] = [];
  selectedSpecial: Skill;

  constructor(readonly data: DataService) { }

  ngOnInit(): void {
    this.initData();
  }

  addSkill(skill: Skill): void {
    const current = this.data.get(skill.id);
    const prerequisite = skill.prerequisite == "" ? 1 : this.data.get(skill.prerequisite);
    if (!prerequisite || current >= skill.maxLevel || this.skillCount >= this.MaxSkill) { return; }

    this.data.incr(skill.id);
    this.skillCount++;
    this.skillProgress = (this.skillCount - 1) / this.MaxSkill;

    if(skill.specialization) {
      this.addToSpecial(skill);
    }
  }

  removeSkill(skill: Skill): void {
    const current = this.data.get(skill.id);
    const dependent = skill.dependent == "" ? 0 : this.data.get(skill.dependent);
    if ((dependent && current <= 1) || current <= 0 || this.skillCount <= 0) { return; }

    this.data.decr(skill.id);
    this.skillCount--;
    this.skillProgress = (this.skillCount - 1) / this.MaxSkill;

    if(skill.specialization) {
      this.removeFromSpecial(skill);
    }
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

  toggleSpecialization() {
    let index = this.specialList.indexOf(this.selectedSpecial);
    index = ++index % this.specialList.length;
    this.selectedSpecial = this.specialList[index];
  }

  private addToSpecial(skill: Skill) {
    this.specialList.push(skill);
    this.selectedSpecial = skill;
  }

  private removeFromSpecial(skill: Skill) {
    const index = this.specialList.indexOf(skill);
    this.specialList.splice(index, 1);
    if (this.selectedSpecial === skill) {
      if (this.specialList.length) {
        this.selectedSpecial = this.specialList[0];
      } else {
        this.selectedSpecial = new Skill;
        this.selectedSpecial.label = "-"
        this.selectedSpecial.icon = "icon-lock";
      }
    }
  }

  private initData() {
    this.selectedSpecial = new Skill;
    this.selectedSpecial.label = "-";
    this.selectedSpecial.icon = "icon-lock";
    this.skillCount = 0;
    this.specialList = [];

    let valid = true;
    this.skills.combat.left.forEach(skill => {
      if (valid) { valid = this.validateSkill(skill); }
      else { this.data.clear(skill.id); }
    });

    valid = true;
    this.skills.combat.right.forEach(skill => {
      valid = this.initSkill(skill, valid);
    });

    valid = true;
    this.skills.support.left.forEach(skill => {
      valid = this.initSkill(skill, valid);
    });

    valid = true;
    this.skills.support.right.forEach(skill => {
      valid = this.initSkill(skill, valid);
    });

    valid = true;
    this.skills.survival.left.forEach(skill => {
      valid = this.initSkill(skill, valid);
    });

    valid = true;
    this.skills.survival.right.forEach(skill => {
      valid = this.initSkill(skill, valid);
    });

    valid = true;
    this.skills.tech.left.forEach(skill => {
      valid = this.initSkill(skill, valid);
    });

    valid = true;
    this.skills.tech.right.forEach(skill => {
      valid = this.initSkill(skill, valid);
    });
  }

  private initSkill(skill: Skill, valid: boolean): boolean {
    if (valid) { 
      valid = this.validateSkill(skill);
    }
    else {
      this.data.clear(skill.id);
    }
    return valid;
  }

  private validateSkill(skill: Skill): boolean {
    const current = this.data.get(skill.id);
    const prerequisite = skill.prerequisite == "" ? 1 : this.data.get(skill.prerequisite);
    if (!prerequisite || current > skill.maxLevel || this.skillCount + current > this.MaxSkill) {
      this.data.clear(skill.id);
      return false;
    }

    this.skillCount += current;
    this.skillProgress = (this.skillCount - 1) / this.MaxSkill;

    if(skill.specialization && current) {
      this.addToSpecial(skill);
    }
    return true;
  }
}
