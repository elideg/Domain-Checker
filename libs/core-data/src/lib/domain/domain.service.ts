import { QUERY_KEY } from './../../../../../.env';
import { Injectable, Query } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, switchMap, tap, filter, take } from 'rxjs/operators';
import { Domain } from './domain';
import { combineLatest } from 'rxjs';

const BASE_URL = ' https://domaination.p.rapidapi.com/domains';

@Injectable({
  providedIn: 'root'
})
export class DomainService {

  constructor(private httpClient: HttpClient) { }


  search(search) {
    return this.httpClient.get(`${BASE_URL}/${search}`);
  }

  getTLD() {
    return this.httpClient.get(`${BASE_URL}tld`);
  }
}
