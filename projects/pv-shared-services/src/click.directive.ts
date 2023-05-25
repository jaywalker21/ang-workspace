import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Directive({
  selector: '[pvClickTrack]',
})
export class ClickTrackDirective implements OnInit, OnChanges, OnDestroy {
  @Input('pvClickTrack')
  public trackClick: boolean = false;

  @Input('pvTrackLabel')
  public label?: string;

  private activeSubscriptions: Subscription = new Subscription();
  private trackedEventLabel: string = '';

  public constructor(private readonly host: ElementRef) {}

  public ngOnInit(): void {
    this.setupListeners();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['userEvents']) {
      this.setupListeners();
    }

    if (changes['label']) {
      this.trackedEventLabel =
        this.label ??
        (this.host.nativeElement as HTMLElement)?.textContent ??
        '';
    }
  }

  public ngOnDestroy(): void {
    this.clearListeners();
  }

  private setupListeners(): void {
    console.log('value of boolean ', this.trackClick);
    this.clearListeners();
    this.activeSubscriptions = new Subscription();
    if (this.trackClick) {
      this.activeSubscriptions.add(
        fromEvent<MouseEvent>(this.host.nativeElement, 'click').subscribe(
          (eventObj) => {
            const label = (
              this.label ??
              (eventObj.target as HTMLElement).textContent ??
              ''
            ).trim();
            console.log('label and elements ', label, 'click');
          }
        )
      );
    }
  }

  private clearListeners(): void {
    this.activeSubscriptions.unsubscribe();
  }

  private trackUserEvent(userEvent: string, eventObj: MouseEvent): void {
    const targetElement = eventObj.target as HTMLElement;
    console.log(
      'click properties ',
      targetElement,
      userEvent,
      this.trackedEventLabel
    );
  }
}
