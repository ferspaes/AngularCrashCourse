import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdentityService {

  public userName: string = null;
  public loggedIn = false;
  constructor() { }
}
