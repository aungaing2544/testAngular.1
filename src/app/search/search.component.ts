import { Component,Input,Output,EventEmitter } from '@angular/core';
//import { MovieService } from '../movie.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  movieShow:any;
  movieId : number = 0;
  //@Output() show: EventEmitter<number> = new EventEmitter<number>();
  
  constructor(){}
  ngOnInit(){
  }

  getData(res:any) {
  
    this.movieShow = res;
    //console.log(this.movieShow)

    }


}
