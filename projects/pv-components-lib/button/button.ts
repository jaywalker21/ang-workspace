import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';

import { ButtonModule as PrimeNgButtonModule } from 'primeng/button';
import { ClickTrackingModule } from '@pv-frontend/pv-shared-directives/tracking';

type ButtonType = 'button' | 'submit' | 'reset';

@Component({
  selector: 'pv-button',
  template: `
    <p-button
      [pvClickTrack]="trackClick"
      [pvTrackLabel]="trackLabel"
      [style]="style"
    >
      <ng-content></ng-content>
    </p-button>
  `,
  styleUrls: ['./button.css'],
})
export class Button {
  @Input()
  public buttonType: ButtonType = 'button';

  @Input()
  public buttonText: string = '';

  @Input()
  public style: any = {};

  @Input()
  public trackClick: boolean = false;

  @Input()
  public trackLabel: string = '';
}

@NgModule({
  imports: [CommonModule, PrimeNgButtonModule, ClickTrackingModule],
  exports: [Button],
  declarations: [Button],
})
export class ButtonModule {}
