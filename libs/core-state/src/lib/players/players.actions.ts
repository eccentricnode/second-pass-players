import { Action } from '@ngrx/store';

import { Player } from '@second-pass/core-data';

export enum PlayersActionTypes {
  PLAYERS_ACTION  = '[PLAYERS] Players Action',
  PLAYER_SELECTED = '[PLAYERS] Player Selected',
  LOAD_PLAYERS    = '[PLAYERS] Load Players',
  PLAYERS_LOADED  = '[PLAYERS] Players Loaded',
  ADD_PLAYER      = '[PLAYERS] Add Player',
  PLAYER_ADDED    = '[PLAYERS] Player Added',
  UPDATE_PLAYER   = '[PLAYERS] Update Player',
  PLAYER_UPDATED  = '[PLAYERS] Player Updated',
  DELETE_PLAYER   = '[PLAYERS] Delete Player',
  PLAYER_DELETED  = '[PLAYERS] Player Deleted',
}

export class Players implements Action {
  readonly type = PlayersActionTypes.PLAYERS_ACTION;
}

export class PlayerSelected implements Action {
  readonly type = PlayersActionTypes.PLAYER_SELECTED;
  constructor(public payload) { }
}

export class LoadPlayers implements Action {
  readonly type = PlayersActionTypes.LOAD_PLAYERS;
  constructor() { }
}

export class PlayerLoaded implements Action {
  readonly type = PlayersActionTypes.PLAYERS_LOADED;
  constructor(public payload: Player[]) { }
}

export class AddPlayer implements Action {
  readonly type = PlayersActionTypes.ADD_PLAYER;
  constructor(public payload: Player) { }
}

export class PlayerAdded implements Action {
  readonly type = PlayersActionTypes.PLAYER_ADDED;
  constructor(public payload: Player) { }
}

export class UpdatePlayer implements Action {
  readonly type = PlayersActionTypes.UPDATE_PLAYER;
  constructor(public payload: Player) { }
}

export class PlayerUpdated implements Action {
  readonly type = PlayersActionTypes.PLAYER_UPDATED;
  constructor(public payload: Player) { }
}

export class DeletePlayer implements Action {
  readonly type = PlayersActionTypes.DELETE_PLAYER;
  constructor(public payload: Player) { }
}

export class PlayerDeleted implements Action {
  readonly type = PlayersActionTypes.PLAYER_DELETED;
  constructor(public payload: Player) { }
}

export type PlayersAction = Players
  | PlayerSelected
  | LoadPlayers
  | PlayerLoaded
  | AddPlayer
  | PlayerAdded
  | UpdatePlayer
  | PlayerUpdated
  | DeletePlayer
  | PlayerDeleted
;
