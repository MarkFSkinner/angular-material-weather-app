import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-angular-material';

  data:object = {};

  updateData(data:object) {
    /*this.data = {
      location: location
    }*/
    this.data = data;
    console.log(this.data);
  }
}
