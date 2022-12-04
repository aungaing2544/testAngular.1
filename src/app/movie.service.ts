import { Injectable,Input,Output } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Imovie } from './imovie';
import {Observable} from 'rxjs';

//@Input() moveieID : number = '0';
  //@Output() notify :EventEmitter<string> = new EventEmitter<string>()

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }
  getMovie(movieId: number ): Observable<Array<Imovie>>{
      return this.http.get<Array<Imovie>>(`https://638492184ce192ac605bc39a.mockapi.io/Movie/${movieId}`);

  }
}
