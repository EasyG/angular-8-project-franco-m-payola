import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { GetUsersService } from '../services/services.service';
 
@Injectable()
export class UsersEffects {
 
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[USERS ACTIONS: PENDING]'),
      mergeMap(() => this.usersService.getAllUsers()
        .pipe(
          map(users => {
              return { type: '[USERS ACTIONS: FULFILLED]', users }
          }),
          catchError(() => of({ type: '[USERS ACTIONS: ERROR]' }))
        )
      )
    )
  );
 
  constructor(
    private actions$: Actions,
    private usersService: GetUsersService
  ) {}
}
