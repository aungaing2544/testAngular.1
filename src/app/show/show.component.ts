import { Component,Input,Output,EventEmitter} from '@angular/core';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
//@Output() show: EventEmitter<string> = new EventEmitter<string>();
export class ShowComponent {
  dataShow:any;

  @Input() movieIdShow : number = 0;
  @Output() show: EventEmitter<any> = new EventEmitter<any>();
  constructor(private service:MovieService){}
  //movieIdShow:number= 0;
  
  Onclick() {
    this.service.getMovie(this.movieIdShow).subscribe (res=>{
    console.log(res)
    this.dataShow = res;
    this.show.emit(this.dataShow)
  })
}
}

