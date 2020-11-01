import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConectionService {

  constructor(private http : HttpClient) { }


  searchInUsers(param){
    return this.http.post('https://search.torre.co/people/_search?size=10',{"name": {"term": param}})

  }
  searchInOrganizations(param){
    return this.http.post('https://search.torre.co/opportunities/_search?size=10',{"name": {"term": param}})

  }
  
  

}
