import { Action, createReducer, on } from '@ngrx/store';
import * as UsersActions from './users.actions';

export interface UsersState {
  data: any;
  pending: boolean;
  error: boolean;
  isFetchCompleted: boolean;
}

export const initialState: UsersState = {
  data: null,
  pending: null,
  error: null,
  isFetchCompleted: null,
};

const usersReducer = createReducer(
    initialState,
    on(UsersActions.FetchPending, state => ({ ...state, pending: true })),
    on(UsersActions.FetchFulfilled, (state, { users }) => {
        return { ...state, data: users, pending: false, isFetchCompleted: true }
    }
    ),
    on(UsersActions.FetchError, state => ({ ...state, error: true, pending: false })),
    on(UsersActions.ClearData, state => (initialState))
  );
  
export function reducer(state: UsersState | undefined, action: Action) {
    return usersReducer(state, action);
}
