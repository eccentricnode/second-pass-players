import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

import { Player } from '@second-pass/core-data';
import { PlayersFacade } from '@second-pass/core-state';

@Component({
  selector: 'second-pass-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  form: FormGroup;
  players$: Observable<Player[]> = this.playersFacade.allPlayers$;
  selectedPlayer$: Observable<Player> = this.playersFacade.selectedPlayers$;

  constructor(
    private playersFacade: PlayersFacade,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.playersFacade.loadPlayers();
    this.initForm();
    this.playersFacade.mutations$.subscribe(_ => this.reset());
    this.reset();
  }

  selectPlayer(player) {
    this.playersFacade.selectPlayer(player.id);
  }

  savePlayer(player: Player) {
    player.id ? this.playersFacade.updatePlayer(player) : this.playersFacade.createPlayer(player);
  }

  removePlayer(player) {
    this.playersFacade.deletePlayer(player);
  }

  reset() {
    this.form.reset();
    this.selectPlayer({id: null});
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: null,
      name: ['', Validators.compose([Validators.required])],
      height: ['', Validators.compose([Validators.required])],
      position: ['', Validators.compose([Validators.required])],
      number: [null, Validators.compose([Validators.required])],
      team: ['', Validators.compose([Validators.required])],
    });
  }
}
