import { Injectable } from '@angular/core';
import { fakeListings } from './fake-data';
import { Listing } from './types';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  constructor() { }

  getListings(): Listing[] {
    return fakeListings;
  }
}
