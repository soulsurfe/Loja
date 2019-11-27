import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Dvd } from '../models/dvd';
import { timer } from 'rxjs/internal/observable/timer';
import { map, delay } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class DvdService {
  private dvdSubjects$: BehaviorSubject<Dvd[]> = new BehaviorSubject<Dvd[]>([]);
  public dvds$ = this.dvdSubjects$.asObservable();

  constructor() {
    timer(2000)
    .subscribe(() => { this.dvdSubjects$.next([
      {title: 'Dvd - Beegees', eyar: 2016, genre: 'Music'},
      {title: 'The wind', eyar: 2018 , genre: 'Movie'},

    ]);
   });
  }
  add(b: Dvd) {
    this.dvdSubjects$.getValue().push(b);
  }

  remove(i: number) {
    // tslint:disable-next-line: prefer-const
    let dvds = this.dvdSubjects$.getValue();
    if (i >= 0 && i < dvds.length) {
         dvds.splice(i, 1);
      }
  }
  get(i: number): Observable<Dvd> {
    return this.dvds$.pipe(
      map(dvds => (i >= 0 && i < dvds.length) ? dvds[i] : null),
      delay(1000)
    );
  }
}

