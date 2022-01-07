import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  data_receiving: any = [];

  private subject = new BehaviorSubject(localStorage.getItem('username'));

  constructor() { }

  sendMessage(message: string){
    this.subject.next(message);
    return this.data_receiving.push(message);
    
  }

  receivedMessage():Observable<any>{
    return this.subject.asObservable();
  }
}
