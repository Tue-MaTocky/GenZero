import { Component, ElementRef, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { DataService } from './services/data.service';
import { Title } from '@angular/platform-browser';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild("copyBox") copyBox: ElementRef;
  cssClassMap = new Map();
  headerCssClass: string = "";

  constructor (
    readonly router: Router,
    readonly titleSrv: Title,
    readonly data: DataService
  ) {}

  ngOnInit(): void {
    this.titleSrv.setTitle("GenZero - Skill Calculator");

    this.cssClassMap.set("/gen-zero/skills", "skill-page");
    this.cssClassMap.set("/gen-zero/weapons", "weapon-page");
    this.cssClassMap.set("/gen-zero/gear", "gear-page");

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        let url = this.router.url.indexOf("/gen-zero/skills") !== -1 ? "/gen-zero/skills" : this.router.url;
        url = this.router.url.indexOf("/gen-zero/weapons") !== -1 ? "/gen-zero/weapons" : url;
        this.headerCssClass = this.cssClassMap.get(url);
      }
    });
  }

  ngAfterViewInit(): void {
    this.data.copyBox = this.copyBox;
  }

  loadCopyBox() {
    this.data.showCopyBox = false;
    window.location.href = this.data.url
  }
}
