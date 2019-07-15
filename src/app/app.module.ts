import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { SocialPostsComponent } from './app/social-posts/social-posts.component';
import { PostComponent } from './app/social-posts/post/post.component';
import { PostFormComponent } from './app/social-posts/post-form/post-form.component';


@NgModule({
  declarations: [
    AppComponent,
    SocialPostsComponent,
    PostComponent,
    PostFormComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
