import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  public flights = [
    {
      name: " Indigo",
      FlightNo: 34123,
      source: "Delhi",
      Destination: "Bangalore",
      Departure: "16:00 hours",
      isbooked: false,
      price: 2500,
      passengerscount: 0
    },
    {
      name: "Air Asia",
      FlightNo: 54215,
      source: "Hubli",
      Destination: "Hindon",
      Departure: "1:00 hours",
      isbooked: false,
      price: 2000,
      passengerscount: 0
    },
    {
      name: "Air India",
      FlightNo: 35023,
      source: "Delhi",
      Destination: "Leh",
      Departure: "6:00 hours",
      isbooked: false,
      price: 7000,
      passengerscount: 0
    },
    {
      name: "GoAir",
      FlightNo: 34123,
      source: "Delhi",
      Destination: "Chennai",
      Departure: "4:00 hours",
      isbooked: false,
      price: 5000,
      passengerscount: 0
    },
  ]
  public source:string="";
  public destination : string ="";
  public fare: number = 0;
  public isclicked = false;
  book(t: any) {
    t.isbooked = !t.isbooked;
    // console.log(t);
    let passengers = prompt("Enter The Total Number of Passengers");
    if (passengers != null) {
      t.passengerscount = parseInt(passengers);
      if(parseInt(passengers)>5)
      {
      this.fare += parseInt(passengers) * t.price  ;
      this.fare= this.fare-0.15*this.fare;
      this.source=t.source;
      this.destination=t.Destination;
      }
      else
      { 
      this.fare += parseInt(passengers) * t.price ;
      this.source=t.source;
      this.destination=t.destination;
      }

    }
    console.log(passengers);
    if (passengers == '') {
      alert("Enter Valid Number");
      t.isbooked = !t.isbooked;
    }

  }
  cancelbook(t: any) {
    t.isbooked = !t.isbooked;
    this.fare -= t.price * t.passengerscount;
  }




}


