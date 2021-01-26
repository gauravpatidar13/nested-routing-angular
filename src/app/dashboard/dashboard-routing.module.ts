import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InboxComponent } from './inbox/inbox.component';
import { NewPostsComponent } from './new-posts/new-posts.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProfileMainComponent } from './profile-main/profile-main.component';
import { UploadComponent } from './upload/upload.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';

const routes: Routes = [
  {path:'',redirectTo:'new-post',pathMatch:'full'},
  {path:'new-post',component:NewPostsComponent},
  {path:'view-profile',component:ViewProfileComponent},
  {path:'view-post',component:ViewPostComponent},
  {path:'inbox',component:InboxComponent},
  {path:'notifications',component:NotificationsComponent},
  {path:'upload',component:UploadComponent},
  {path:'profile-main',component:ProfileMainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
