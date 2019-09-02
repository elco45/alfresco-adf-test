import { AuthenticationService } from '@alfresco/adf-core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public router: Router, public authenticationService: AuthenticationService) {
  }

  onMyAuthLogin($event) {
    console.log(this.authenticationService.getRedirect());
    console.log("My token " + $event.token.ticket);
    this.router.navigate(['/home']);
  }
}
