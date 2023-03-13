/* eslint-disable no-underscore-dangle */
import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { IUserCredentials } from '../../models/i-user-credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  // tipagem genérica interfere com auto-complete
  public readonly userCredentials = this._nfb.group({
    email: ['', Validators.required],
    password: ['',
      [Validators.required,
        Validators.minLength(6),
        Validators.pattern(/^[0-9]*$/)]],
  });

  constructor(
    private readonly _nfb: NonNullableFormBuilder,
    private readonly _auth: AuthService,
    private readonly _router: Router,
  ) { }

  public attemptLogin(): void {
    const credentials: IUserCredentials = {
      email: this.userCredentials.controls.email.value,
      password: this.userCredentials.controls.password.value,
    };
    this._auth.updateStatus(credentials);
    if (this._auth.isLogged) {
      this._router.navigate(['/home']);
    }
  }
}
