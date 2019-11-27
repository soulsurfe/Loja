import { Injectable } from '@angular/core';
import { BehaviorSubject, timer, Observable } from 'rxjs';
import { Book } from '../models/book';
import { map, delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  private bookSubjects$: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
  public books$ = this.bookSubjects$.asObservable();
  constructor() {
    timer(2000)
      .subscribe(() => this.bookSubjects$.next([
        {title: 'Book 1', pages: 200, authors: [ 'jhon', 'nicole']},
        {title: 'Book 2', pages: 380 , authors: ['milly']},
        {title: 'Book 3', pages: 400 , authors: ['fred']},
        {title: 'Book 4', pages: 180 , authors: ['ane', 'peter', 'samuel']},
        {title: 'Book 5', pages: 250 , authors: ['paull', 'jhonathan']},
      ]));
  }
  add(b: Book) {
    this.bookSubjects$.getValue().push(b);
  }

  remove(i: number) {
    // tslint:disable-next-line: prefer-const
    let books = this.bookSubjects$.getValue();
    if (i >= 0 && i < books.length) {
         books.splice(i, 1);
      }
  }
  get(i: number): Observable<Book> {
    return this.books$.pipe(
      map(books => (i >= 0 && i < books.length) ? books[i] : null),
      delay(1000)
    );
  }
}
