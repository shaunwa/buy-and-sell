import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Listing } from './types';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  constructor(
    private http: HttpClient,
  ) { }

  getListings(): Observable<Listing[]> {
    return this.http.get<Listing[]>('/api/listings');
  }

  getListingById(id: string): Observable<Listing> {
    return this.http.get<Listing>(`/api/listings/${id}`);
  }

  addViewToListing(id: string): Observable<Listing> {
    return this.http.post<Listing>(
      `/api/listings/${id}/add-view`,
      {},
      httpOptions,
    );
  }

  getListingsForUser(): Observable<Listing[]> {
    return this.http.get<Listing[]>('/api/users/12345/listings');
  }

  deleteListing(id: string): Observable<any> {
    return this.http.delete(`/api/listings/${id}`);
  }

  createListing(name: string, description: string, price: number): Observable<Listing> {
    return this.http.post<Listing>(
      '/api/listings',
      { name, description, price },
      httpOptions,
    );
  }

  editListing(id: string, name: string, description: string, price: number): Observable<Listing> {
    return this.http.post<Listing>(
      `/api/listings/${id}`,
      { name, description, price },
      httpOptions,
    );
  }
}
