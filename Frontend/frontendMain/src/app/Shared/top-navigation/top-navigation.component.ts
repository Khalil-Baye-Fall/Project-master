import { Component, Input, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/Auth/auth-service.service';
import { MessageService } from 'src/app/Services/message.service';


@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {

  
  username: string = '';
 

  @Input() public parentData: any;

  constructor(
    public authService: AuthServiceService,
    public messageService: MessageService
    ) { 

    }

  ngOnInit(): void {

   this.DataReceiving();
  }
  
  DataReceiving(){
    this.messageService.receivedMessage().subscribe(
      data => {
        this.username = data; 
    })
    
  }

  
  
 

}
