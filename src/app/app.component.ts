import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'asingit-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  year = new Date().getFullYear();
  profile: any;
  isCollapsed = false;
  triggerTemplate = null;
  @ViewChild('trigger') customTrigger: TemplateRef<void>;

  constructor(private auth: AuthService) {
    auth.handleAuthentication();
  }

  ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
      });
    }
  }

  /** custom trigger can be TemplateRef **/
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }

  login(): void {
    this.auth.login();
  }
}
