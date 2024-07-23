import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {

  private dbUrl = 'https://angular-mrng-batch-default-rtdb.firebaseio.com/books.json';  // Ensure the URL is correct

  constructor(private http: HttpClient) { }

  saveBook(books: any[]): Observable<any> {
    return this.http.post(this.dbUrl, books);
  }
}
