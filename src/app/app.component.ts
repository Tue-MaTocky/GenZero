import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'GenZero';

  constructor (
    readonly router: Router,
    readonly titleSrv: Title,
    readonly data: DataService
  ) {}

  ngOnInit(): void {
    this.titleSrv.setTitle("GenZero - Skill Calculator");
  }
}
