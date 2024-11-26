import { Component, OnInit } from '@angular/core';
import { Examen } from '../model/examen.model';
import { ExamenService } from '../services/examen.service';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class examenComponent implements OnInit {

     examens! : Examen[]; 
     
     constructor(private examenService: ExamenService ) {
      
      }
   

      ngOnInit(): void {

        this.getAll();
      }
    
      getAll(){
        this.examenService.getAll().subscribe(e => {
          console.log(e);
          this.examens = e;
        });
      }
   

 
  

}
