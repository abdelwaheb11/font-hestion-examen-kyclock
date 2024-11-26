import { Injectable } from '@angular/core';
import { Examen } from '../model/examen.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root'
})
export class ExamenService {
  apiURL: string = 'http://localhost:8080/examen/api/all';


  Examen! : Examen[];
 

  constructor(private http : HttpClient) { 
    
  }

  getAll(): Observable<Examen[]>{
    return this.http.get<Examen[]>(this.apiURL);
  }

  

     
       
}