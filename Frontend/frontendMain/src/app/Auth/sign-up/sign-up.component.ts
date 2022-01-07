import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  model:any = {};
  details_message: any ;
  errorMessage = '';
  message_error= {};


  constructor(
    private authService: AuthServiceService,
    private route: Router,
  ) { }

  ngOnInit(): void {
  }

  SingUp(){
    this.authService.Register(this.model).subscribe(
      data => {
      //  console.log(data);
       this.details_message = data;
       if (this.details_message != "successfully registered new user.") {
        this.message_error = this.details_message;
        
       }
       
       else{
        this.route.navigate(['confirmation']);
       }
   
      },
      error => {
        console.log(error);
        this.details_message = error;
      
        this.errorMessage = 'Oups! Something goes wrong during registration! Please check again.\
         Your passwords must match.';
      }
    )
  }

}
