import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Player } from '@second-pass/core-data';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'second-pass-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.scss']
})
export class PlayerDetailsComponent {
  selectedPlayer: Player;
  
  @Input() group: FormGroup;
  @Input() set player(value: Player) {
    this.selectedPlayer = value;
    if(!value) return;
    this.group.patchValue({
      id: value.id,
      name: value.name,
      height: value.height,
      position: value.position,
      number: value.number,
      team: value.team
    });
  }

  @Output() submitted = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  submit(directive: NgForm) {
    if(this.group.value) {
      this.submitted.emit(this.group.value);
      directive.resetForm();
    }
  }

  cancel() {
    this.cancelled.emit();
  }

  validateField(control: string, directive: NgForm) {
    return this.group.get(control).invalid && directive.submitted;
  }

  determineUpdate() {
    return !!this.group.value.id;
  }
}
