import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { GradesComponent } from './grades/grades.component';
import { GradeComponent } from './grades/grade/grade.component';
import { EditGradeComponent } from './grades/edit-grade/edit-grade.component';
import { GradesCollection } from './grades/grades.services';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GradesComponent,
    GradeComponent,
    EditGradeComponent,
    HomeComponent,
    SettingsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [GradesCollection],
  bootstrap: [AppComponent],
})
export class AppModule {}
