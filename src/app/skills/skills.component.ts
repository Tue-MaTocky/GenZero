import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  addSkill() {
    this.skillCount += this.skillCount < this.MaxSkill ? 1 : 0;
    this.skillProgress = (this.skillCount - 1) / this.MaxSkill;
  }

  removeSkill() {
    this.skillCount -= this.skillCount > this.MinSkill ? 1 : 0;
    this.skillProgress = (this.skillCount - 1) / this.MaxSkill;
  }

  get SkillBarList() {
    return new Array(this.SkillBarSize);
  }

  barProgressHighlight(value: number): boolean {
    const barProgress = value / this.SkillBarSize;
    return (this.skillProgress - barProgress) >= 0;
  }
}
