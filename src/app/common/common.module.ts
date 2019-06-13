import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { LocationComponent } from './location/location.component';
import { ConverterComponent } from './converter/converter.component';

@NgModule({
  declarations: [SearchComponent, LocationComponent, ConverterComponent],
  imports: [
    CommonModule
  ]
})
export class CommonModule { }
