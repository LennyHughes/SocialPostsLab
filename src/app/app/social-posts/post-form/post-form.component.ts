import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {PostInterface} from '../interfaces';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  
  title: string;
  thought: string;

  postFormObj : PostInterface = {
      title: "",
      thought: ""
  };
 

  @Output() submitted = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  addToPostComponent(){

    this.postFormObj["title"] = this.title;
    this.postFormObj["thought"] = this.thought;
 

    this.submitted.emit(this.postFormObj);
  

  }

   

}
