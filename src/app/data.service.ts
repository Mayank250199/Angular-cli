import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  fetchData(){
     return this.http.get("Enter your data base link").map(
       (res) => res.json()
    );
  }

}
