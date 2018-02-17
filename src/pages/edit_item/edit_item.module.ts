import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditItemPage } from './edit_item';

@NgModule({
  declarations: [
    EditItemPage,
  ],
  imports: [
    IonicPageModule.forChild(EditItemPage),
  ],
})
export class EditItemPageModule {}