import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { WeaponWheel } from '../../data/weaponWheel';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'weapon-wheel-slice',
  templateUrl: './weapon-wheel-slice.component.html',
  styleUrls: ['./weapon-wheel-slice.component.scss']
})
export class WeaponWheelSliceComponent implements OnInit {

  rotate: string;
  crownClass: string = "";
  selected: string = "";

  @Input() slicePosition: number = 0;
  @Input() set select(value: boolean) {
      this.selected = value ? "select" : "";
      this.compZIndex = value ? "-2" : "";
  };

  @HostBinding('style.transform') compRotation = '';
  @HostBinding('style.z-index') compZIndex = '';

  constructor(
    readonly data: DataService
  ) { }

  ngOnInit(): void {
    this.rotate = `rotate(-${this.slicePosition * 45}deg)`;
    this.compRotation = `rotate(${this.slicePosition * 45}deg)`;
    setTimeout(() => { this.updateCrown(); }, 0);
  }

  get weapon(): WeaponWheel { return this.data.getWeapon(this.slicePosition); }

  private updateCrown() {
      this.crownClass = `weapon-crown-${this.weapon.crown}`;
  }
  
}
