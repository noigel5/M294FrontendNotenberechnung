import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AuthConfig, OAuthModule } from 'angular-oauth2-oidc';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { authConfig } from './app.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { createSpyFromClass } from 'jasmine-auto-spies';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        OAuthModule.forRoot({resourceServer: {sendAccessToken: true}}),
        MatToolbarModule,
        MatIconModule,
        HttpClientModule,
        MatSidenavModule,
        BrowserAnimationsModule
      ],
      providers: [
        {provide: HttpClient, useValue: createSpyFromClass(HttpClient)},
        {provide: AuthConfig, useValue: authConfig}],
      declarations: [
        AppComponent,
        LoginComponent
      ],
    }).compileComponents();
  });
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
