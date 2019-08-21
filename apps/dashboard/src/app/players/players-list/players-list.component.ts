import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Player } from '@second-pass/core-data';

@Component({
  selector: 'second-pass-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent {
  @Input() players: Player[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  select(player: Player) {
    this.selected.emit(player);
  }

  remove(player: string) {
    this.deleted.emit(player);
  }
}
