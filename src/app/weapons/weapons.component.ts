import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { weapons } from '../data/weaponData';
import { equipment } from '../data/equipData';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.scss']
})
export class WeaponsComponent implements OnInit {
  // private count = 0;
  private selectedSlot: number = 0;
  
  toggleBg: boolean = false;
  
  constructor(readonly data: DataService) { }

  ngOnInit(): void { 

    // this.data.weaponData.forEach(item => {
    //   this.data.setWeapon(item.slot, equipment[item.slot].id);
    // });
  }

  selected(slotNum: number): boolean {
    return this.selectedSlot === slotNum;
  }

  selectSlot(slotNum: number) {
    this.selectedSlot = slotNum;
    // this.count++;
    // this.data.weaponData.forEach(item => {
    //   this.data.setWeapon(item.slot, equipment[(item.slot + this.count) % equipment.length].id);
    // });
  }

}
