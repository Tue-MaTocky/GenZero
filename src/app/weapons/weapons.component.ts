import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.scss']
})
export class WeaponsComponent implements OnInit {
  readonly slots: number[] = [0,1,2,3,4,5,6,7];

  private selectedSlot: number = 5;
  
  toggleBg: boolean = false;
  
  constructor(readonly data: DataService) { }

  ngOnInit(): void { }

  selected(slotNum: number): boolean {
    return this.selectedSlot === slotNum;
  }

  selectSlot(slotNum: number) {
    this.selectedSlot = slotNum;
  }

}
