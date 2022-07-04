import { Injectable, ElementRef } from '@angular/core';
import { Skill } from '../data/skillData';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly StringDataList = ["sss"];

  private data: any = {};
  private _selectedSpecial: Skill

  maxSkillsReached: boolean = false;
  copyBox: ElementRef;
  showCopyBox: boolean = false;
  url: string = "";

  constructor() { 
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

  createLink() {
    const dataCode = this.constructDataCode();
    this.copyToClipBoard(dataCode);
    // this.extractDataCode(dataCode);
  }

  resetSelectedSpecial() {
    this.selectedSpecial = new Skill;
    this.selectedSpecial.label = "-";
    this.selectedSpecial.icon = "icon-lock";
  }

  incr(id: string) {
    if (this.data[id] === undefined) {
      this.data[id] = 1;
      return;
    }
    this.data[id]++;
  }

  decr(id: string) {
    if (this.data[id] === 1) {
      this.clear(id);
      return;
    }
    this.data[id]--;
  }

  set(id: string, value: number) {
    this.data[id] = value;
  }

  get(id: string): number {
    return this.data[id] === undefined ? 0 : this.data[id];
  }

  clear(id: string) {
    delete this.data[id];
  }
  
  private constructDataCode(): string {
    let dataStr = JSON.stringify(this.data);
    dataStr = dataStr.replace(/[{}"]/g, "");
    dataStr = dataStr.replace(/:/g, "-");
    dataStr = dataStr.replace(/,/g, "~");

    return dataStr;
  }

  private extractDataCode(code: string): void {
    let dataCode = "";
    const codeNodes =code.split("~");
    codeNodes.forEach(node => {
      const dNode = node.split("-");
      dataCode = dataCode.concat(`"${dNode[0]}":${this.dataString(dNode)},`);
    });
    dataCode = `{${dataCode.slice(0, -1)}}`;
    this.data = JSON.parse(dataCode);
  }

  private dataString(dataNode: string[]): string {
    return this.StringDataList.indexOf(dataNode[0]) != -1 ? `"${dataNode[1]}"` : dataNode[1];
  }

  private copyToClipBoard(value: string) {
    this.url = `${window.location.origin}/gen-zero/${value}`;
    this.showCopyBox = true;
    const el = this.copyBox.nativeElement;
    el.value = this.url;
    el.setAttribute('readonly', '');
    el.focus();
    el.select();
    document.execCommand('copy');
  }
}
