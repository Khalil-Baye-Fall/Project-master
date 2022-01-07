import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/Auth/auth-service.service';

@Component({
  selector: 'app-left-navigation',
  templateUrl: './left-navigation.component.html',
  styleUrls: ['./left-navigation.component.scss']
})
export class LeftNavigationComponent implements OnInit {

  constructor(public authService: AuthServiceService,) { }

  ngOnInit(): void {
  }

}
