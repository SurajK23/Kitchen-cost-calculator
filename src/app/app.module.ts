import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderItemComponent } from './Component/order-item/order-item.component';
import { OrderDetailsComponent } from './Component/order-details/order-details.component';
import { EditComponent } from './Component/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderItemComponent,
    OrderDetailsComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
