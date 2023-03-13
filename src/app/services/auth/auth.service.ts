import { Injectable } from '@angular/core';
import { IUserCredentials } from '../../models/i-user-credentials';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users: IUserCredentials[] = [{
    email: 'lorena@yahoo.com.br',
    password: '18181818',
  },
  {
    email: 'carla@yahoo.com.br',
    password: '18181818',
  },
  ];

  private getCredentialsValidity(
    connectingUser: IUserCredentials,
  ): boolean {
    for (let i = 0; i < this.users.length; i += 1) {
      const currentUser = this.users[i];
      if (currentUser.email === connectingUser.email
        && currentUser.password === connectingUser.password) {
        return true;
      }
    }
    return false;
  }

  public get currentUserEmail(): string {
    return window.sessionStorage.getItem('currentUserEmail') ?? '';
  }

  private set currentUserEmail(email: string) {
    window.sessionStorage.setItem('currentUserEmail', email);
  }

  private set isLogged(status: boolean) {
    window.sessionStorage.setItem('logado', status.toString());
  }

  public get isLogged() {
    return window.sessionStorage.getItem('logado') === 'true';
  }

  public logOut(): void {
    this.isLogged = false;
    this.currentUserEmail = '';
  }

  public updateStatus(connectingUser: IUserCredentials): void {
    if (!this.isLogged) {
      this.currentUserEmail = connectingUser.email;
      this.isLogged = this.getCredentialsValidity(connectingUser);
    }
  }
}
