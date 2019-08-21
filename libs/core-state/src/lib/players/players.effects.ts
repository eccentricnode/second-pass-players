import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map } from 'rxjs/operators';

import { PlayersState } from './players.reducer';
import {
  PlayersActionTypes,
  LoadPlayers,
  PlayerLoaded,
  AddPlayer,
  PlayerUpdated,
  UpdatePlayer,
  DeletePlayer,
  PlayerDeleted,
} from './players.actions';
import { PlayersService, Player } from '@second-pass/core-data';

@Injectable()
export class PlayersEffects {
  @Effect() loadPlayers$ = this.dataPersistence.fetch(PlayersActionTypes.LOAD_PLAYERS, {
    run: (action: LoadPlayers, state: PlayersState) => {
      return this.playersService.all().pipe(map((res: Player[]) => new PlayerLoaded(res)));
    },

    onError: (action: LoadPlayers, error) => {
      console.error('Error', error);
    }
  });

  @Effect() addPlayer$ = this.dataPersistence.pessimisticUpdate(PlayersActionTypes.ADD_PLAYER, {
    run: (action: AddPlayer, state: PlayersState) => {
      return this.playersService.create(action.payload).pipe(map((res: Player) => new PlayerUpdated(res)));
    },

    onError: (action: AddPlayer, error) => {
      console.error('Error', error);
    }
  });

  @Effect() updatePlayer$ = this.dataPersistence.pessimisticUpdate(PlayersActionTypes.UPDATE_PLAYER, {
    run: (action: UpdatePlayer, state: PlayersState) => {
      return this.playersService.update(action.payload).pipe(map((res: Player) => new PlayerUpdated(res)));
    },

    onError: (action: UpdatePlayer, error) => {
      console.error('Error', error);
    }
  });

  @Effect() deletePlayer$ = this.dataPersistence.pessimisticUpdate(PlayersActionTypes.DELETE_PLAYER, {
    run: (action: DeletePlayer, state: PlayersState) => {
      return this.playersService.delete(action.payload.id).pipe(map(_ => new PlayerDeleted(action.payload)));
    },

    onError: (action: DeletePlayer, error) => {
      console.error('Error', error);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<PlayersState>,
    private playersService: PlayersService
  ) {}
}
