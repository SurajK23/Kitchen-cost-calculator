import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderItemComponent } from './Component/order-item/order-item.component';
import { OrderDetailsComponent } from './Component/order-details/order-details.component';
import { EditComponent } from './Component/edit/edit.component';


const routes: Routes = [
  {path:'',component:OrderItemComponent},
  {path:'details/:id',component:OrderDetailsComponent},
  {path:'edit/:id',component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
