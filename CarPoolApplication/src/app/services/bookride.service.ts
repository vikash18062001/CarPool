import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ride } from '../models/ride';

@Injectable({
  providedIn: 'root'
})
export class BookrideService {

  constructor(private http : HttpClient) { }

  getMatchesForRide(rideDetails : Ride) :  Observable<Array<Ride>>
  {
    return this.http.post<Array<Ride>>("https://localhost:7177/ride/getmatches",rideDetails);
  }

  bookRide(userId : number , rideId : number) : Observable<Ride>
  {
    return this.http.post<Ride>(`https://localhost:7177/ride/bookride/${userId}/${rideId}`,"");
  }

  getBookedRides(userId : number) : Observable<Array<Ride>>
  {
    return this.http.get<Array<Ride>>(`https://localhost:7177/ride/getbookedride?userId=${userId}`);
  }
}
