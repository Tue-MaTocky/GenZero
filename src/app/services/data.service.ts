import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data: any = {};

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
  
  constructor() { }
}
