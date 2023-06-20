import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../../service/main.service';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public username!: string;

  @Output() search: EventEmitter<string> = new EventEmitter();

  public heroName: FormControl = new FormControl('', Validators.required);

  constructor(
    private mainService: MainService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.username = this.mainService.getLocalData('currentUser');
  }

  public exit(): void {
    this.mainService.setLocalData('token', {});
    this.mainService.setLocalData('currentUser', {});
    this.router.navigate(['/authorization']).then(() => {});
  }

  public searchClick(heroName: string): void {
    if (this.heroName.valid) {
      this.search.emit(heroName);
    }
  }
}
