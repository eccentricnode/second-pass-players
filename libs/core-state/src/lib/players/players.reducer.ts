import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Player } from '@second-pass/core-data';
import { PlayersAction, PlayersActionTypes } from './players.actions';

export interface PlayersState extends EntityState<Player> {
  selectedPlayerId: string | null;
}

export const adapter: EntityAdapter<Player> = createEntityAdapter<Player>();
export const initialState: PlayersState = adapter.getInitialState({
  selectedPlayerId: null,
});

export function playersReducer(state: PlayersState = initialState, action: PlayersAction): PlayersState {
  switch (action.type) {
    case PlayersActionTypes.PLAYER_SELECTED: {
      return Object.assign({}, state, { selectedPlayerId: action.payload });
    }

    case PlayersActionTypes.PLAYERS_LOADED: {
      return adapter.upsertMany(action.payload, state);
    }

    case PlayersActionTypes.PLAYER_ADDED: {
      return adapter.addOne(action.payload, state);
    }

    case PlayersActionTypes.PLAYER_UPDATED: {
      return adapter.upsertOne(action.payload, state);
    }

    case PlayersActionTypes.PLAYER_DELETED: {
      return adapter.removeOne(action.payload.id, state);
    }

    default: 
      return state;
  }
}

export const getSelectedPlayerId = (state: PlayersState) => state.selectedPlayerId;

// get the selectors ...

export const {
  selectIds: selectPlayerIds,
  selectEntities: selectPlayerEntities,
  selectAll: selectAllPlayers,
  selectTotal: selectPlayerTotal
} = adapter.getSelectors();