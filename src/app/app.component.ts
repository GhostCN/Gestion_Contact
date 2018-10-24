import { Component } from '@angular/core';
import {Etudiant} from './Entities/etudiant';
import {Classe} from './Entities/Classe';
import {Inscription} from './Entities/Inscription';
import {HttpClient} from '@angular/common/http';
import {InscrireService} from './inscrire.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 etudiant:Etudiant=new Etudiant();
 classe:Classe=new Classe();
 inscription:Inscription=new Inscription();
 classes:any;

 constructor(private cons:InscrireService,private http:HttpClient)
 {
    this.http.get("localhost:8080/contacts").subscribe(data=>{this.classes=data;
    })
 }
 ins(){

 }
  ngOnInit(){

  }


 LoadCmbx()
 {
   this.cons.GetClasses().subscribe(data=>{
     this.classes=data;
     console.log(this.classes);
   })
 }
}
