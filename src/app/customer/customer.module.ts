import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { StoreModule } from '@ngrx/store';
import { customerFeatureKey, reducer } from './store/reducer/customer.reducer';
import { CustomerRemoveComponent } from './customer-remove/customer-remove.component';

@NgModule({
  declarations: [CustomerViewComponent, CustomerAddComponent, CustomerRemoveComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(customerFeatureKey,reducer)
  ],
  exports: [CustomerViewComponent,CustomerAddComponent]
})
export class CustomerModule { }
