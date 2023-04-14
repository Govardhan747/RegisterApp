import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-wellcome',
  templateUrl: './wellcome.component.html',
  styleUrls: ['./wellcome.component.css']
})
export class WellcomeComponent implements OnInit {

  constructor(private service: RegistrationService, private router: Router, public auth: AuthGuard) { }

  ngOnInit(): void {
  }
  goto() {
    this.router.navigate(['/login'])
  }

}