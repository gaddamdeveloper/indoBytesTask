import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormDetailViewComponent } from './components/form-detail-view/form-detail-view.component';

const routes: Routes = [
  {path:'customer-view',component:FormDetailViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
