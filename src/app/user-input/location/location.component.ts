import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  //inputs: ['location'],
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  location:string = '';

  constructor() { }

  ngOnInit() {
  }

  displayLocation(location:string) {
    //console.log(location);
    this.location = location;
  }

}
