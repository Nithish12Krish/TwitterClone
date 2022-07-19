import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 
  isDisplay=false;
  isShow=true;
  Followerscount:number=110;
  Followingcount:number=450;
  notification:String[]=[];
  istoggle:boolean=false;
  
  constructor(private router:Router) {
   }

   getNotification(){
    return this.notification;
   }
  
  toggleNotifi(){
    console.log(this.notification);
    this.istoggle=!this.istoggle;
  }
    
    Follow(){
  this.isDisplay=!this.isDisplay;
  this.isShow=!this.isShow;
  alert("@User following Harini");
  this.Followerscount++;
  setTimeout(()=>
  {alert("Harini following back"),this.Followingcount++},2000)
  this.notification.push("Harini following You");
  
   console.log(this.notification);
    }

    
  
    
    Following(){
      Swal.fire({
        title: 'Unfollowing  user',
        text: 'Their Tweets will no longer show up in your home timeline.you can still view their profile,unless their tweets are protected',
        showCancelButton: true,
        confirmButtonText: 'unfollow',
        cancelButtonText: 'cancel'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'unfollowed',
            'Your are not following the user',
            'success'
          )
          this.isDisplay=!this.isDisplay;
          this.isShow=!this.isShow;
          this.Followerscount--;
          
        } else if (result.dismiss === Swal.DismissReason.cancel) {
  
        }
      })
      }
  
      ngOnInit(): void {
      }
  }


