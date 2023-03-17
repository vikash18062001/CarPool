import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ride } from '../models/ride';

@Injectable({
  providedIn: 'root'
})
export class OfferrideService {

  constructor(private http:HttpClient) { }

  offerRide(offerRide : Ride) : Observable<Ride>
  {
    return this.http.post<Ride>('https://localhost:7177/ride/offerride',offerRide);
  }

  getOfferedRides(userId : number ) : Observable<Array<Ride>>
  {
    return this.http.get<Array<Ride>>(`https://localhost:7177/ride/getofferride?userId=${userId}`);
  }
}
