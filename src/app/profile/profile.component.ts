import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router";
import {Angular2TokenService} from "angular2-token";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  constructor(public authTokenService:Angular2TokenService,
              private router:Router) {}

  logOut(){
    this.authTokenService.signOut().subscribe(() => this.router.navigate(['/']));
  }

  ngOnInit() {
  }

}
