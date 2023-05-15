import { CommonModule } from "@angular/common";
import { Component, Input, NgModule } from "@angular/core";

type ButtonType = 'button' | 'submit' | 'reset'

@Component({
    selector: 'pv-button',
    template:`
        <button class="button" [type]="buttonType">{{ buttonText }}</button>
    `,
    styleUrls: ['./button.css']
})
export class Button {

    @Input() 
    public buttonType: ButtonType = 'button';

    @Input()
    public buttonText: string = '';

}

@NgModule({
    imports: [CommonModule],
    exports: [Button],
    declarations: [Button]
})
export class ButtonModule {};