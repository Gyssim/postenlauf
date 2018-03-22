import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostenPage } from './posten';

@NgModule({
  declarations: [
    PostenPage,
  ],
  imports: [
    IonicPageModule.forChild(PostenPage),
  ],
})
export class PostenPageModule {}
