import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { TypedSimpleChanges } from 'pv-shared-services/common';
import { fromEvent, Subscription } from 'rxjs';
import { TelemetryImplService } from 'pv-shared-services/telemetry-service';

@Directive({
  selector: '[pvClickTrack]',
})
export class ClickTrackDirective implements OnInit, OnChanges, OnDestroy {
  private activeSubscriptions: Subscription = new Subscription();
  private trackedEventLabel: string = '';

  public constructor(
    private readonly host: ElementRef,
    private telemetryService: TelemetryImplService
  ) {}

  /**
   * Indicates whether the click should be tracked or not for a given element
   *
   * The default value is `false`
   */
  @Input('pvClickTrack')
  public shouldTrackClick?: boolean = false;

  /**
   * The label to be sent for analytics event when the element is clicked.
   *
   * In case the click tracking for element is enabled without passing custom label, the text content of the element is sent as label to analytics event
   */
  @Input('pvTrackLabel')
  public label?: string;

  public ngOnInit(): void {
    this.setupListeners();
  }

  public ngOnChanges(changes: TypedSimpleChanges<this>): void {
    if (changes.label) {
      this.trackedEventLabel = this.getElementLabel(changes.label.currentValue);
    }
  }

  public ngOnDestroy(): void {
    this.clearListeners();
  }

  private setupListeners(): void {
    this.clearListeners();
    this.activeSubscriptions = new Subscription();
    if (this.shouldTrackClick) {
      this.activeSubscriptions.add(
        fromEvent<MouseEvent>(this.host.nativeElement, 'click').subscribe(
          () => {
            this.telemetryService.trackEvent({
              eventType: 'click',
              label: this.getElementLabel(),
            });
          }
        )
      );
    }
  }

  private clearListeners(): void {
    this.activeSubscriptions.unsubscribe();
  }

  private getElementLabel(overrideValue?: string | null | undefined): string {
    return (
      overrideValue ??
      this.trackedEventLabel ??
      (this.host.nativeElement as HTMLElement)?.textContent ??
      ''
    ).trim();
  }
}
