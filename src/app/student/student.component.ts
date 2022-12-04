import { Component,EventEmitter,Input ,OnInit ,Output } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})

export class StudentComponent implements OnInit {
  @Input() reviews : string = '';
  @Output() notify :EventEmitter<string> = new EventEmitter<string>()

  constructor(){ }

  ngOnInit() {
    
  }
  onclick() {
    this.notify.emit("Nuengruethai Aunyingcharoen")

  }


}
