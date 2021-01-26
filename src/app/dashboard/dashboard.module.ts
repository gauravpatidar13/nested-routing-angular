import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NewPostsComponent } from './new-posts/new-posts.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { InboxComponent } from './inbox/inbox.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProfileMainComponent } from './profile-main/profile-main.component';
import { NestedAuthorViewComponent } from './new-posts/nested-author-view/nested-author-view.component';
import { NestedLikesViewComponent } from './new-posts/nested-likes-view/nested-likes-view.component';
import { UploadComponent } from './upload/upload.component';
import { FilePondModule} from 'ngx-filepond';
import { CommentViewComponent } from './view-post/comment-view/comment-view.component';
@NgModule({
  declarations: [NewPostsComponent, ViewProfileComponent, ViewPostComponent, InboxComponent, NotificationsComponent, ProfileMainComponent, NestedAuthorViewComponent, NestedLikesViewComponent, UploadComponent, CommentViewComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FilePondModule
  ]
})
export class DashboardModule { }
