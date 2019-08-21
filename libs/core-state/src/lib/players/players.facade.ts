import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import * as fromPlayers from './players.reducer';
import * as PlayersSelectors from './players.selectors';
import * as PlayersActions from './players.actions';

@Injectable()
export class PlayersFacade {
  loaded$ = this.store.pipe(select(PlayersSelectors.getPlayersLoaded));
  allPlayers$ = this.store.pipe(select(PlayersSelectors.getAllPlayers));
  selectedPlayers$ = this.store.pipe(select(PlayersSelectors.getSelected));

  constructor(private store: Store<fromPlayers.PlayersPartialState>) {}

  loadAll() {
    this.store.dispatch(PlayersActions.loadPlayers());
  }
}
