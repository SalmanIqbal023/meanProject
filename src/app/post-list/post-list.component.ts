import { Post } from './../post.model';
import { PostsService } from './../posts.service';
import { Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy{

  // posts=[
  //   {
  //     title:"First Post",
  //     content:"This is the first post Content"
  //   },
  //   {
  //     title:"Second Post",
  //     content:"This is the second post Content"
  //   },
  //   {
  //     title:"Third Post",
  //     content:"This is the third post Content"
  //   }
  // ]
  
posts:Post[]=[]
  private postsSub: Subscription = new Subscription;

  constructor(public postsService:PostsService) { }

  ngOnInit(): void {

    this.postsService.getPosts();
    this.postsService.getPostUpdateListener()
    .subscribe((posts:Post[])=>{
      this.posts=posts;

    });
  }

    onDelete(postId:string){
      this.postsService.deletePost(postId);
    }
  ngOnDestroy(): void {
    this.postsSub.unsubscribe();
  }

}
