import { createAction, props } from '@ngrx/store';
import { User } from '../models/model';


export enum UsersActionsTypes {
  FETCH_PENDING = '[USERS ACTIONS: PENDING]',
  FETCH_FULFILLED = '[USERS ACTIONS: FULFILLED]',
  FETCH_ERROR = '[USERS ACTIONS: ERROR]',
  CLEAR_DATA = '[USERS ACTIONS] CLEAR DATA',
}

export const FetchPending = createAction(
    '[USERS ACTIONS: PENDING]'
);

export const FetchFulfilled = createAction(
    '[USERS ACTIONS: FULFILLED]',
    props<{ users: User[] }>()
);

export const FetchError = createAction(
    '[USERS ACTIONS: ERROR]',
    props<{ error: string }>()
);

export const ClearData = createAction(
    '[USERS ACTIONS: CLEAR DATA]'
);
