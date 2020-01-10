import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { EventoItem } from '../models/EventoItem';

@Injectable({
  providedIn: 'root'
})
export class EventoItemService {

  myAppUrl: string;
  myApiUrl: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.appUrl;
    this.myApiUrl = 'api/EventosItem/';
  }

  getEventoItems(): Observable<EventoItem[]> {
    return this.http.get<EventoItem[]>(this.myAppUrl + this.myApiUrl)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  getEventoItem(eventoItemId: number): Observable<EventoItem> {
    return this.http.get<EventoItem>(this.myAppUrl + this.myApiUrl + eventoItemId)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  saveEventoItem(eventoItem): Observable<EventoItem> {
    return this.http.post<EventoItem>(this.myAppUrl + this.myApiUrl, JSON.stringify(eventoItem), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  updateEventoItem(eventoItemId: number, eventoItem): Observable<EventoItem> {
    return this.http.put<EventoItem>(this.myAppUrl + this.myApiUrl + eventoItemId, JSON.stringify(eventoItemId), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  deleteEventoItem(eventoItemId: number): Observable<EventoItem> {
    return this.http.delete<EventoItem>(this.myAppUrl + this.myApiUrl + eventoItemId)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    console.log(errorMessage);
    return throwError(errorMessage);
  }
}