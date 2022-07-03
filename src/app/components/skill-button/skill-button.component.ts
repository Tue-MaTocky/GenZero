import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Skill } from '../../data/skillData';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'skill-button',
  templateUrl: './skill-button.component.html',
  styleUrls: ['./skill-button.component.scss']
})
export class SkillButtonComponent implements OnInit {
  readonly MaxSkill = 30;

  hovering: boolean = false;

  @Input() skill: Skill;

  @Output() addSkill = new EventEmitter();
  @Output() removeSkill = new EventEmitter();
  @Output() updateView = new EventEmitter();

  constructor(readonly data: DataService) { }

  ngOnInit(): void { }

  onAddSkill(skill: Skill): void {
    this.addSkill.emit(skill);
  }

  onRemoveSkill(skill: Skill): void {
    this.removeSkill.emit(skill);
  }

  onUpdateView(skill: Skill) {
    this.hovering = true;
    this.updateView.emit(skill);
  }

  onMouseOut() {
    this.hovering = false;
  }
}
