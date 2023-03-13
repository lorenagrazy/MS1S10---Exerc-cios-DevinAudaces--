import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss'],
})
export class FullComponent {
  constructor(
    private readonly _auth: AuthService,
    private readonly _router: Router,
  ) { }

  public logout() {
    this._auth.logOut();
    this._router.navigate(['/login']);
  }
}
