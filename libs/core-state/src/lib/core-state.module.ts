import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers } from '.';
import { PlayersEffects } from './players/players.effects';
import { PlayersFacade } from './players/players.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([PlayersEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
  ],
  providers: [PlayersFacade]
})
export class CoreStateModule {}
