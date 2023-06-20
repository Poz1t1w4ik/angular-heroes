import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Hero} from "../../model/resultHero";

@Component({
  selector: 'app-detail-hero',
  templateUrl: './detail-hero.component.html',
  styleUrls: ['./detail-hero.component.scss']
})
export class DetailHeroComponent {
  constructor(
    public dialogRef: MatDialogRef<DetailHeroComponent>,
    @Inject(MAT_DIALOG_DATA) public hero: Hero
  ) {}
}
