import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/common/service/api.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  blogDetails:any;
  blogDescription: any = []
  isLoggedIn:boolean = false
  constructor(private route:ActivatedRoute, private api:ApiService){}
  ngOnInit(): void {
    let blogId = this.route.snapshot.params['id'];
    this.getBlogDetails(blogId);
    this.api.isLoggedIn.subscribe((res:any)=>{
      this.isLoggedIn = res;
    })
  }

  getBlogDetails(blogId:any){
    this.api.getBlogById(blogId).subscribe((res:any)=>{
      this.blogDetails = res;
      this.blogDescription = this.blogDetails.description.split('.');
    })
  }
}
