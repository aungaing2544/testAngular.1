import { Component } from '@angular/core';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title='Workshop';

  // movieId:number= 0 ;

  // constructor(private service:MovieService){

  // }

  // Onclick() {

  //   this.service.getMovie(this.movieId).subscribe(res=>{
  //   //console.log(res)

  //   })

  // }
  //  myName:string   = 'Nuengruethai Aunyingcharoen';
  //  isDisable:boolean = true;
  //  firstName:string= '' ;

  //  confirm(){
  //  console.log(this.firstName)
  //  }
  // showButtonLboolean = true;
  // books: any[] = [{ title:"Mody Dick", author:"Herman Melvile"},
  //  { title:"War and Peace", author:"Leo Tolstoy"},
  //  { title:"Ulysses", author:"James Joyce"}]

  // options:string='b';
  // bookk:any[] = [{ inStock:'yes'}]

  // ngOnInit(){
  //   console.log(this.myName)
  // }

}

//ชี้ที่อยู่ของไฟล์นั้นๆ และเป็นการตั้งชื่อเอาไว้ใช้สำหรับหน้าอื่นๆ
