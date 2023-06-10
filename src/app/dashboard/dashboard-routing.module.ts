import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { PostComponent } from './posts/post/post.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import { AddPostGuard } from '../common/guard/add-post.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'posts', pathMatch: 'full' },
      { path: 'sign-in', component: SignInComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: 'post', component: PostComponent },
      { path: 'add-post', canActivate: [AddPostGuard], component: AddPostComponent },
      { path: ':id/post-details', component: PostDetailsComponent },
      { path: 'dashboard', component: PostComponent },
      { path: 'about-us', component: PostComponent },
      { path: 'profile', component: PostComponent },
      { path: 'help', component: PostComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
