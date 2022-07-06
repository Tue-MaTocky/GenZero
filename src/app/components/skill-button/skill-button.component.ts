import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { Skill } from '../../data/skillData';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'skill-button',
  templateUrl: './skill-button.component.html',
  styleUrls: ['./skill-button.component.scss']
})
export class SkillButtonComponent implements OnInit {
  readonly MaxSkill = 30;

  private clicks = 0;

  hovering: boolean = false;

  @Input() skill: Skill;

  @Output() addSkill = new EventEmitter();
  @Output() removeSkill = new EventEmitter();
  @Output() updateView = new EventEmitter();

  @HostBinding('style.height') compHeight = '';

  constructor(readonly data: DataService) { }

  ngOnInit(): void { 
    if(!this.skill.specialization) { this.compHeight = '100%'; }
  }

  onClick(skill: Skill): void {
    if(this.clicks++ <= 0) {
      setTimeout(() => {
        if(this.clicks > 1) {
          this.removeSkill.emit(skill);
        } else {
          this.addSkill.emit(skill);
        }
        this.clicks = 0;
      }, 300);
    }
  }

  onRightClick(skill: Skill): void {
    this.removeSkill.emit(skill);
  }

  onMouseEnter(skill: Skill) {
    this.hovering = true;
    this.updateView.emit(skill);
  }

  onMouseOut() {
    this.hovering = false;
  }

  get lockSkill(): boolean {
    return this.skill.prerequisite !== "" && this.data.get(this.skill.prerequisite) <= 0;
  }

  get powerUp(): {'power-up': boolean} {
    return {'power-up': this.data.get(this.skill.dependent) > 0};
  }

  get levelMaxed(): {'level-capped': boolean} {
    return {'level-capped': this.data.maxSkillsReached && this.data.get(this.skill.id) <= 0};
  }

  get clockLabel(): boolean {
    return (this.lockSkill || this.data.maxSkillsReached && this.data.get(this.skill.id) <= 0) && !this.hovering;
  }
}
