import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setData(name: string, data: any): void {
    const stringifiedData = JSON.stringify(data);
    localStorage.setItem(name, stringifiedData);
  }

  getData(name: string, defaultData?: any): any {
    const storedData = localStorage.getItem(name);
    if (storedData) {
      return JSON.parse(storedData);
    }
    return defaultData;
  }

  removeData(name: string): void {
    localStorage.removeItem(name);
  }

  removeArrayItem(name: string, item: string): void {
    let data = this.getData(name);
    if (!Array.isArray(data)) {
      return;
    }

    data = data.filter(dataItem => dataItem !== item);
    this.setData(name, data);
  }

  clearAllLocalStorage(): void {
    localStorage.clear();
  }
}
