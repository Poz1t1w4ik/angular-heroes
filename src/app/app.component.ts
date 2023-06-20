import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MainService} from "./core/service/main.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'angular-heroes';

  constructor(
    private mainService: MainService
  ) {
    this.mainService.localStoragePreparation();
  }

}
