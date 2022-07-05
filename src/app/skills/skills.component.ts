import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    readonly data: DataService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const codeData = this.route.snapshot.paramMap.get('codeData');
    this.data.updateCodeData(codeData);
    this.initData();
  }

  addSkill(skill: Skill): void {
    const current = this.data.get(skill.id);
    const prerequisite = skill.prerequisite == "" ? 1 : this.data.get(skill.prerequisite);
    if (!prerequisite || current >= skill.maxLevel || this.skillCount >= this.MaxSkill) { return; }

    this.data.incr(skill.id);
    this.skillCount++;
    this.calcProgress();

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
    this.calcProgress();

    if(skill.specialization) {
      this.removeFromSpecial(skill);
    }
  }

  calcProgress(): void {
    if (this.skillCount === this.MaxSkill) {
      this.data.maxSkillsReached = true;
      this.skillProgress = 1
      return;
    }
    this.data.maxSkillsReached = false;
    this.skillProgress = (this.skillCount - 1) / this.MaxSkill;
  }

  updateView(skill: Skill): void {
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

  toggleSpecialization(): void {
    let index = this.specialList.indexOf(this.data.selectedSpecial);
    index = ++index % this.specialList.length;
    this.data.selectedSpecial = this.specialList[index];
  }

  initData(clearData = false): void {
    const savedSelectedSpecial = this.data.selectedSpecial;
    this.skillCount = 0;
    this.skillProgress = -1;
    this.specialList = [];

    let valid = !clearData;
    this.skills.combat.left.forEach(skill => {
      if (valid) { valid = this.validateSkill(skill); }
      else { this.data.clear(skill.id); }
    });

    valid = !clearData;
    this.skills.combat.right.forEach(skill => {
      valid = this.initSkill(skill, valid);
    });

    valid = !clearData;
    this.skills.support.left.forEach(skill => {
      valid = this.initSkill(skill, valid);
    });

    valid = !clearData;
    this.skills.support.right.forEach(skill => {
      valid = this.initSkill(skill, valid);
    });

    valid = !clearData;
    this.skills.survival.left.forEach(skill => {
      valid = this.initSkill(skill, valid);
    });

    valid = !clearData;
    this.skills.survival.right.forEach(skill => {
      valid = this.initSkill(skill, valid);
    });

    valid = !clearData;
    this.skills.tech.left.forEach(skill => {
      valid = this.initSkill(skill, valid);
    });

    valid = !clearData;
    this.skills.tech.right.forEach(skill => {
      valid = this.initSkill(skill, valid);
    });

    if (!clearData) {
      this.data.selectedSpecial = savedSelectedSpecial;
    } else {
      this.data.clear('sss');
    }
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
    this.calcProgress();

    if(skill.specialization && current) {
      this.addToSpecial(skill);
    }
    return true;
  }

  private addToSpecial(skill: Skill): void {
    this.specialList.push(skill);
    this.data.selectedSpecial = skill;
  }

  private removeFromSpecial(skill: Skill): void {
    const index = this.specialList.indexOf(skill);
    this.specialList.splice(index, 1);
    if (this.data.selectedSpecial === skill) {
      if (this.specialList.length) {
        this.data.selectedSpecial = this.specialList[0];
      } else {
        this.data.resetSelectedSpecial();
      }
    }
  }

}
