import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromPlayers from './players.reducer';
import { emptyPlayer } from '@second-pass/core-data';

// Lookup the 'Players' feature state managed by NgRx
export const selectPlayersState = createFeatureSelector<fromPlayers.PlayersState>('players');

export const selectPlayerIds = createSelector(
  selectPlayersState,
  fromPlayers.selectPlayerIds
);

export const selectPlayerEntities = createSelector(
  selectPlayersState,
  fromPlayers.selectPlayerEntities
);

export const selectAllPlayers = createSelector(
  selectPlayersState,
  fromPlayers.selectAllPlayers
);

export const selectCurrentPlayerId = createSelector(
  selectPlayersState,
  fromPlayers.getSelectedPlayerId
);

export const selectCurrentPlayer = createSelector(
  selectPlayerEntities,
  selectCurrentPlayerId,
  (playerEntities, playerId) => {
    return playerId ? playerEntities[playerId] : Object.assign({}, emptyPlayer);
  }
)