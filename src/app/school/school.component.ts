import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentComponent } from '../student/student.component';
@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent  {
  school:string='Kasetsart Univercity'
  show:string='';
 
  onclick(show: string) {
    this.show = show;
  }

}
