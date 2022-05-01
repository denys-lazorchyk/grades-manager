import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { ControllerComponent } from './controller/controller.component';
import { GradesComponent } from './grades/grades.component';
import { GradeComponent } from './grades/grade/grade.component';
import { EditGradeComponent } from './grades/edit-grade/edit-grade.component';
import { GradesCollection } from './main/grades.services';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainComponent,
    ControllerComponent,
    GradesComponent,
    GradeComponent,
    EditGradeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [GradesCollection],
  bootstrap: [AppComponent],
})
export class AppModule {}
