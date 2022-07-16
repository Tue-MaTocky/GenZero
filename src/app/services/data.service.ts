import { Injectable, ElementRef } from '@angular/core';
// import { AngularFireAnalytics } from '@angular/fire/compat/analytics';
import { skillData, Skill } from '../data/skillData';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly StringDataList = ["sss"];
  private readonly skills = skillData;

  private data: any = {};
  private _selectedSpecial: Skill

  maxSkillsReached: boolean = false;
  copyBox: ElementRef;
  showCopyBox: boolean = false;
  url: string = "";
  codeData: string = "";

  constructor() { 
  // constructor(private analytics: AngularFireAnalytics) {
    this.resetSelectedSpecial();
  }

  set selectedSpecial(value: Skill) {
    this._selectedSpecial = value;
    if (value.id) {
      this.data.sss = value.id;
    } else {
      this.clear('sss');
    }
  }

  get selectedSpecial(): Skill {
    return this._selectedSpecial;
  }

  createLink(): void {
    // this.analytics.logEvent('Saved Build: ', this.data);
    const dataCode = this.constructDataCode();
    this.copyToClipBoard(dataCode);
  }

  resetSelectedSpecial(): void {
    this.selectedSpecial = new Skill;
    this.selectedSpecial.label = "-";
    this.selectedSpecial.icon = "icon-lock";
  }

  incr(id: string): void {
    if (this.data[id] === undefined) {
      this.data[id] = 1;
      return;
    }
    this.data[id]++;
  }

  decr(id: string): void {
    if (this.data[id] === 1) {
      this.clear(id);
      return;
    }
    this.data[id]--;
  }

  set(id: string, value: number): void {
    this.data[id] = value;
  }

  get(id: string): number {
    return this.data[id] === undefined ? 0 : this.data[id];
  }

  clear(id: string): void {
    delete this.data[id];
  }
  
  updateCodeData(codeData: string): void {
    if (!codeData) { return; }
    setTimeout(()=> { this.codeData = codeData; }, 0);
    const success = this.extractDataCode(codeData);
    if (success) {
      this.updateSpecialization();
    } else {
      window.location.href = window.location.origin;
    }
  }

  private constructDataCode(): string {
    let dataStr = JSON.stringify(this.data);
    dataStr = dataStr.replace(/[{}"]/g, "");
    dataStr = dataStr.replace(/:/g, "-");
    dataStr = dataStr.replace(/,/g, "~");

    return dataStr;
  }

  private extractDataCode(code: string): boolean {
    let dataCode = "";
    const codeNodes =code.split("~");
    codeNodes.forEach(node => {
      const dNode = node.split("-");
      if (dNode.length == 2){
        dataCode = dataCode.concat(`"${dNode[0]}":${this.dataString(dNode)},`);
      }
    });
    dataCode = `{${dataCode.slice(0, -1)}}`;
    this.data = JSON.parse(dataCode);
    return dataCode === "{}" ? false : true;
  }

  private dataString(dataNode: string[]): string {
    return this.StringDataList.indexOf(dataNode[0]) != -1 ? `"${dataNode[1]}"` : dataNode[1];
  }

  private updateSpecialization() {
    const id = this.data.sss;
    if(!id) { return; }

    switch (id) {
      case 'sa5':
        this._selectedSpecial = this.skills.combat.left[5];
        break;
      case 'sb5':
        this._selectedSpecial = this.skills.combat.right[5];
        break;
      case 'sc5':
        this._selectedSpecial = this.skills.support.left[5];
        break;
      case 'sd5':
        this._selectedSpecial = this.skills.support.right[5];
        break;
      case 'se5':
        this._selectedSpecial = this.skills.survival.left[5];
        break;
      case 'sf5':
        this._selectedSpecial = this.skills.survival.right[5];
        break;
      case 'sg5':
        this._selectedSpecial = this.skills.tech.left[5];
        break;
      case 'sh5':
        this._selectedSpecial = this.skills.tech.right[5];
        break;
      default:
        this.resetSelectedSpecial();
    }
  }

  private copyToClipBoard(value: string) {
    this.url = `${window.location.origin}/${value}`;
    this.showCopyBox = true;
    const el = this.copyBox.nativeElement;
    el.value = this.url;
    el.setAttribute('readonly', '');
    el.focus();
    el.select();
    document.execCommand('copy');
  }
}
