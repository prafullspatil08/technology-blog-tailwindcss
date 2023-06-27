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
  constructor(private route:ActivatedRoute, private api:ApiService){}
  ngOnInit(): void {
    let blogId = this.route.snapshot.params['id'];
    this.getBlogDetails(blogId);
  }

  getBlogDetails(blogId:any){
    this.api.getBlogById(blogId).subscribe((res:any)=>{
      this.blogDetails = res;
      console.log('this.blogDetails: ', this.blogDetails);
    })
  }
}
