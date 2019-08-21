import { ActionReducerMap } from '@ngrx/store';

import * as fromPlayers from './players/players.reducer';

export interface AppState {
    players: fromPlayers.PlayersState;
}

export const reducers: ActionReducerMap<AppState> = {
    players: fromPlayers.playersReducer,
}