import { CommonModule } from "@angular/common";
import { Component, Input, NgModule } from "@angular/core";

@Component({
    selector: 'pv-typography',
    template:`
        <span [ngClass]="{ 'bold' : this.isBold }">{{ text }}</span>
    `,
    styleUrls: ['./typography.css']
})
export class Typography {

    @Input()
    public text: string = '';

    @Input()
    public isBold?: boolean = false;

}

@NgModule({
    imports: [CommonModule],
    exports: [Typography],
    declarations: [Typography]
})
export class TypographyModule {};