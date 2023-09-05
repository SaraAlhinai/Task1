import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  
  footermain: any ={

    'color': 'black',
    'font-size' : '15px',
    'font-weight': 'bold'

  };

  title = 'Practies';
  emp1 = 'SARA';
  emp2 = 'SAFA' ;
  emp3 = 'MARWA' ;
  emp4 = 'ALI' ;
  emp5 = 'MOHAMMED' ;
  
  userinput : string ="";


   update(){

   }

   userInput:string = ''; // Property to store the user's input

   updateParagraph() {
     // This method will be automatically called when the input changes
   }


   userinput1 : string ="";


   update1(){

   }

   userInput1:string = ''; // Property to store the user's input

   updateParagraph1() {
     // This method will be automatically called when the input changes
   }

}
