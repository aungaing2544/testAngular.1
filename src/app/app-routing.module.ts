import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';

// import { StudentComponent } from './student/student.component';



// const routes: Routes =[{path:'student',component:StudentComponent}];
const routes: Routes=[
  {path:'',redirectTo:'search',pathMatch:'full'},
  {path:'search',component:SearchComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
