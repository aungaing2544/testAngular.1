import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieService } from './movie.service';
import { ShowComponent } from './show/show.component';
import { SearchComponent } from './search/search.component';
// import { SchoolComponent } from './school/school.component';
// import { StudentComponent } from './student/student.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowComponent,
    SearchComponent,
    // SchoolComponent,
    // StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
//ประกาศตัวแปรให้โปรแกรมรู้จักตัวช่วยต่างๆที่ใช้ในโปรแกรม