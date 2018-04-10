import { Directive, EventEmitter, HostListener, Injectable, Input, Output } from '@angular/core';

@Injectable()
@Directive({selector: '[esc]'})
export class EscDirective {
  @Input() public watchEsc: boolean = true;
  @Input() public stopEscPropagation: boolean = true;
  @Output('esc') public escEvent$: EventEmitter<KeyboardEvent> = new EventEmitter<KeyboardEvent>();

  @HostListener('document:keydown.escape', ['$event'])
  public onKeyDown($event: KeyboardEvent) {
    if (!this.watchEsc) { return; }
    if (this.stopEscPropagation) {
      $event.stopPropagation();
    }
    this.escEvent$.emit($event);
  }
}
