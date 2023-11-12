import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent {

  effect: any = {
    effect: false,
    ind: 0
  };

  put_hover_effect(index: number) {
    this.effect.effect = true;
    this.effect.ind = index;
  }

  remove_hover_effect(index: number) {
    this.effect.effect = false;
    this.effect.ind = index;
  }

}
