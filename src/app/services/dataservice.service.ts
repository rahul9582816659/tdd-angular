import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // get homes
  getHomes$() {
      // return homes from api
      return this.http.get<any>('assets/homes.json');
    }
}
