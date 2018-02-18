import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditItemDashboardPage } from './edit_item_dashboard';

@NgModule({
  declarations: [
    EditItemDashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(EditItemDashboardPage),
  ],
})
export class EditItemDashboardPageModule {}