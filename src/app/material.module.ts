import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule } from '@angular/material/button';


@NgModule({
	exports: [MatToolbarModule, MatTabsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule]
})
export class MaterialModule {}
