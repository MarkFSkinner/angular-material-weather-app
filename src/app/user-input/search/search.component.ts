import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() locationChange = new EventEmitter();

  cityFormControl:FormControl;

  constructor() { }

  ngOnInit() {
    this.cityFormControl = new FormControl('', [
      Validators.required
    ]);
  }

  onSubmit() {
    //console.log(this.cityFormControl.value);
    this.locationChange.emit({location: this.cityFormControl.value});
  }

}
