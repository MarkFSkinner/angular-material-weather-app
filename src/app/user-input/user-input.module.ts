import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { LocationComponent } from './location/location.component';
import { ConverterComponent } from './converter/converter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [SearchComponent, LocationComponent, ConverterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    //Material
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [SearchComponent, LocationComponent]
})
export class UserInputModule { }
