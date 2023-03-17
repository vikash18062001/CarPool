export class Ride
{
    rideId !: number ;
    userName !: string;
    source !: string ;
    destination !:string;
    date !: Date;
    time !: string;
    stops !: Array<string> ;
    availableSeats !: number;
    price !: number ;
    rideOfferedBy !: number;
    rideTakenBy !: number;
}