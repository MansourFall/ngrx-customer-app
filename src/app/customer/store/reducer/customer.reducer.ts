import { Action, createReducer, on, State } from '@ngrx/store';
import { Customer } from '../../../models/customer';
import * as CustomerActions from '../action/customer.actions';

export const customerFeatureKey = 'customer';

export interface CustomerState {
  customers: Customer[];
}

export const initialState: CustomerState = {
  customers: [],
};

export const customerReducer = createReducer(
  initialState,
  on(CustomerActions.addCustomer, (state: CustomerState, { customer }) => ({
    ...state,
    customers: [...state.customers, customer],
  })),
  on(CustomerActions.removeCustomer, (state: CustomerState, { name }) => ({
    ...state,
    customers:state.customers.filter(c => c.name !== name) 
  }))
);

export function reducer(state: CustomerState | undefined, action: Action) {
  return customerReducer(state,action);
}
