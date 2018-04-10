# angular-esc
Angular 4+ Directive adding `(esc)` event for escape key press.

## Installation
1. Get it from npmjs (for npm <v5 add `--save` flag):
```
npm i angular-esc
```
2. Import `EscModule` into your application:
```typescript
import { EscModule } from 'angular-esc';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, EscModule],
  bootstrap: [AppComponent]
})
class AppModule {}
```

## Usage
```typescript
@Component({
  selector: 'app',
  template: `
    <div *ngIf="isVisible" (esc)="isVisible = false">I will hide after Escape is pressed</div>
  `
})
export class AppComponent {
  public isVisible: boolean = true;
}
```


### Options

| Property name | Type | Default | Description |
| ------------- | ---- | ------- | ----------- |
| `watchEsc` | boolean | `true` | `false` value will disable the watcher |
| `stopEscPropagation` | boolean | `true` | By default the event is not propagated further, you can change it here. |
