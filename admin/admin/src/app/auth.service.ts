import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public  async login(userInfo: User) {
    await localStorage.setItem('ACCESS_TOKEN', userInfo.email);
  }

  public async isLoggedIn() {
    return await localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  public async logout() {
    await localStorage.removeItem('ACCESS_TOKEN');
  }
}
