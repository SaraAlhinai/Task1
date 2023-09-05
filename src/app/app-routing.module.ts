import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  {path:'Home' , component:HomeComponent},
  {path:'student'  , component:StudentComponent}
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

constructor(private router : Router){}


goToStudentPage(){
  this.router.navigate(['/student/']);
  this.router.navigate(['/Home/']);

}

 }
