import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  details = [
    {
      id: 1,
    },
    {
      id:2,
    },
    {
      id:3,
    },
    {
      id:2,
    }
  ];
}
