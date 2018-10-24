import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Etudiant} from './Entities/etudiant';

@Injectable({
  providedIn: 'root'
})
export class InscrireService {

  constructor(private http:HttpClient) { }


  saveEtudiant(etudiant:Etudiant){
   return this.http.get("localhost:8080/")
  }

  GetClasses()
  {
    return this.http.get("localhost:8080/classes");
  }

}
