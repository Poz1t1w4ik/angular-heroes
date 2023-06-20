import {Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {HeroResponse} from "../model/resultHero";

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private _tokenKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';

  constructor(
    private _snackBar: MatSnackBar,
    private http: HttpClient
  ) {}

  public localStoragePreparation(): void {
    const localStorageKeys = ['users', 'token', 'currentUser'];

    localStorageKeys.forEach((key) => {
      if (!localStorage.getItem(key)) {
        const emptyObject = {};
        localStorage.setItem(key, JSON.stringify(emptyObject));
      }
    });
  }

  public getLocalData(key: string): any {
    const dataString = localStorage.getItem(key);
    return dataString ? JSON.parse(dataString) : {};
  }

  public setLocalData(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  public warningMessage(message: string): void {
    this._snackBar.open(message, 'Close', {
      horizontalPosition: "end",
      verticalPosition: "top",
      duration: 3000
    });
  }

  public createToken(): void {
    this.setLocalData('token', this._tokenKey);
  }

  public getHero(nameHero: string): Observable<HeroResponse> {
    return this.http.get<HeroResponse>(`https://superheroapi.com/api.php/587785839796244/search/${nameHero}`);
  }

}
