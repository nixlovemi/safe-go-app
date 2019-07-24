import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppkeyService {

  constructor() { }

  getAppKey(){
    return '7566fd6108e347f68f185ed0f4e5a401';
  }
}