import { Component} from '@angular/core';
import {PostInterface} from './interfaces';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent  {

  show : boolean = false;
  posts : PostInterface [] = [];
  
  onSubmit(event) {
     
    let postObj : PostInterface = {
      title: event.title,
      thought: event.thought
    }
    

      this.posts.push(postObj);
  
      this.show = false;
  }

  showForm(){
    if(!this.show){
     this.show = true;
    }
  }


}
