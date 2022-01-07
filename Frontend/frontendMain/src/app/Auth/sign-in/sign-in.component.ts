import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { MessageService } from 'src/app/Services/message.service';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  model: any = {};
  errorMessage = '';
  data =  {token:'', use_id:'', username:'', email:''};
  username = '';

  

  constructor(
    private authService: AuthServiceService,
    private messageService: MessageService,
    private route: Router,
  ) { }

  ngOnInit(): void {
  }

  Login(){

    this.authService.logIn(this.model).subscribe( 
      
      res => {
        this.data  = res;
        this.username = this.data.username;
        this.route.navigate(['/home']);

        this.messageService.sendMessage(this.data.username);       

    },
    err => {
      this.errorMessage = 'Oups! Something goes wrong! Please try it again.';
    }
    );
    

}

}
