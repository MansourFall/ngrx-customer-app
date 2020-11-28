import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { removeCustomer } from '../store/action/customer.actions';
import { CustomerState } from '../store/reducer/customer.reducer';

@Component({
  selector: 'app-customer-remove',
  templateUrl: './customer-remove.component.html',
  styleUrls: ['./customer-remove.component.scss']
})
export class CustomerRemoveComponent implements OnInit {
  @Input() name;

  constructor(private store: Store<CustomerState>) { }

  ngOnInit(): void {
  }

  removeCustomer(): void {
    this.store.dispatch(removeCustomer(this.name));
  }
}
