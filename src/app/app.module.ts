import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import {AppComponent} from './app.component';


import {CvBuilderFormComponent} from './components/cv-builder-form/cv-builder-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatRadioModule, MatCardModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule} from '@angular/material';
import {LayoutModule} from '@angular/cdk/layout';
import {PersonligInfoComponent} from './components/personlig-info/personlig-info.component';
import {TidigareArbetsgivareComponent} from './components/tidigare-arbetsgivare/tidigare-arbetsgivare.component';
import {UtbildningarComponent} from './components/utbildningar/utbildningar.component';
import {SkillsComponent} from './components/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    CvBuilderFormComponent,
    PersonligInfoComponent,
    TidigareArbetsgivareComponent,
    UtbildningarComponent,
    SkillsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatRadioModule,
    MatCardModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
