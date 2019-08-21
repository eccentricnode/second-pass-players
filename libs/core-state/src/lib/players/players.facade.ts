import { Injectable } from '@angular/core';

import { filter } from 'rxjs/operators';
import { select, Store, ActionsSubject } from '@ngrx/store';

import { selectAllPlayers, selectCurrentPlayer } from './players.selectors';
import { Player } from '@second-pass/core-data';
import { PlayersState } from './players.reducer';
import * as PlayersActions from './players.actions';
import { PlayersActionTypes } from './players.actions';

@Injectable()
export class PlayersFacade {
  allPlayers$ = this.store.pipe(select(selectAllPlayers));
  selectedPlayers$ = this.store.pipe(select(selectCurrentPlayer));

  mutations$ = this.actions$
    .pipe(
      filter(action =>
        action.type === PlayersActionTypes.ADD_PLAYER
        || action.type === PlayersActionTypes.UPDATE_PLAYER
        || action.type === PlayersActionTypes.DELETE_PLAYER
      )
    );

  constructor(
    private store: Store<PlayersState>,
    private actions$: ActionsSubject
    ) {}

  selectPlayer(playerId: string) {
    this.store.dispatch(new PlayersActions.PlayerSelected(playerId));
  }

  loadPlayers() {
    this.store.dispatch(new PlayersActions.LoadPlayers());
  }

  createPlayer(player: Player) {
    this.store.dispatch(new PlayersActions.AddPlayer(player));
  }

  updatePlayer(player: Player) {
    this.store.dispatch(new PlayersActions.UpdatePlayer(player));
  }

  deletePlayer(player: Player) {
    this.store.dispatch(new PlayersActions.DeletePlayer(player));
  }
}
