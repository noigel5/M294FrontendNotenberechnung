import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { AppAuthService } from 'src/app/service/app.auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authService: AppAuthService, public oauthService: OAuthService) {}

  public login() {
    this.authService.login();
  }

  public logout() {
    this.authService.logout();
  }
}
