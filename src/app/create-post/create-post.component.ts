
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-create-post',
//   templateUrl: './create-post.component.html',
//   styleUrls: ['./create-post.component.css']
// })

// export class CreatePostComponent implements OnInit {

//   newPost='salman'

//   onAddPost(postInput:HTMLTextAreaElement){
   
//     this.newPost=postInput.value;
//     console.log(this.newPost);
//   }
  
//   constructor() {}

//   ngOnInit(): void {
//   }

// }




import { PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core';  //,EventEmitter,Output>>>ye import mai likha tha
import { NgForm } from '@angular/forms';
//import { Post } from '../post.model';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
  


export class CreatePostComponent implements OnInit {

 // newPost='salman'
  enteredTitle='';
  enteredContent='';
  //@Output() postCreated=new EventEmitter<Post>();
  constructor(public PostsService:PostsService ) {}


  onAddPost(form:NgForm ){
    if(form.invalid){
      return;
    }
   
    // this.newPost=this.enteredValue;
    // console.log(this.newPost);
    // const post:Post ={
    //   title:form.value.title,
    //   content:form.value.content

    // };
    //this.postCreated.emit(post); 
    this.PostsService.addPost(form.value.title,form.value.content);
    form.resetForm(); 
     
  }
  
  ngOnInit(): void {
  }

}
