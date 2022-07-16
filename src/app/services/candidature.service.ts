import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidatureService {

  token:string=localStorage.getItem('token');
  httpOptions = {
    headers:new HttpHeaders({
      'Authorization':`bearer `+this.token
    })
  };

  constructor(private http:HttpClient) { }

  getCandidatures(){//, this.httpOptions
    return this.http.get(`${environment.BASE_URL}/candidature/getAll`,this.httpOptions);
  }

  getCandidatureById(id:any){
    return this.http.get(`${environment.BASE_URL}/candidature/${id}`,this.httpOptions);
  }

  /*getCandidatureByNom(nom:any){
    return this.http.get(`http://localhost:9191/api/candidature/${nom}`);
  }*/

  createCandidature(candidature:any){
    return this.http.post(`${environment.BASE_URL}/candidature/create`,candidature,this.httpOptions);
  }

  updateCandidature(candidature:any,id:any){
    return this.http.put(`${environment.BASE_URL}/candidature/${id}`,candidature,this.httpOptions);
  }

  deleteCandidature(id:any) {
    return this.http.delete(`${environment.BASE_URL}/candidature/${id}`,this.httpOptions);
  }


}
