import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from '.';
import { PlayersEffects } from './players/players.effects';
import { PlayersFacade } from './players/players.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    EffectsModule.forFeature([PlayersEffects]),
  ],
  providers: [PlayersFacade]
})
export class CoreStateModule {}
