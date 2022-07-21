import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'weapon-wheel-slice',
  templateUrl: './weapon-wheel-slice.component.html',
  styleUrls: ['./weapon-wheel-slice.component.scss']
})
export class WeaponWheelSliceComponent implements OnInit {

  @Input() slicePosition: number = 0;

  constructor(readonly data: DataService) { }

  ngOnInit(): void {}

}
