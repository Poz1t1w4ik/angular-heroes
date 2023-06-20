import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Hero} from "../../model/resultHero";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() hero!: Hero;

  @Output() detailShow: EventEmitter<any> = new EventEmitter();

  public detailInfo(): void {
    this.detailShow.emit(this.hero);
  }
}
