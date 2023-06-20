import {Component, HostListener, ViewChild} from '@angular/core';
import { MainService } from 'src/app/core/service/main.service';
import {Observable} from "rxjs";
import {Hero, HeroResponse} from "../../core/model/resultHero";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {DetailHeroComponent} from "../../core/dialog/detail-hero/detail-hero.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  public getHero!: Observable<HeroResponse>;

  public pageSizeOptions!: number[];

  public spinnerStart = false;

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    const screenWidth = (event.target as Window).innerWidth;
    this._updatePageSizeOptions(screenWidth);
  }


  constructor(
    private mainService: MainService,
    private dialog: MatDialog
  ) {}

  public onPageChange(event: any): void {
    this.paginator.pageIndex = event.pageIndex;
    this.paginator.pageSize = event.pageSize;
  }

  private _updatePageSizeOptions(screenWidth: number): void {
    if (screenWidth < 1100) {
      this.pageSizeOptions = [1];
      this.paginator.pageIndex = this.paginator.pageIndex;
    } else {
      this.pageSizeOptions = [1, 3];
      this.paginator.pageIndex = this.paginator.pageIndex;
      this.paginator.pageSize = 3;
    }
  }

  public search(heroName: string): void {
    this.spinnerStart = true;
    this.getHero = this.mainService.getHero(heroName);
  }

  public detailInfoShow(hero: Hero): void {
    this.dialog.open(DetailHeroComponent, {
      data: hero
    });
  }
}
