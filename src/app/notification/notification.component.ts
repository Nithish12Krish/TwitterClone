import { not } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { Router, UrlSegment } from '@angular/router';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent  implements OnInit {

  constructor(private router:Router, private user:UserComponent) {
    
  }

 @Input() notification?:String[];

  ngOnInit(): void {
    console.log(this.notification);
  }


}