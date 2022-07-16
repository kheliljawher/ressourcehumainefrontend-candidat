import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  constructor(private http:HttpClient) { }

  getCandidats(){
    return this.http.get(`${environment.BASE_URL}/candidat/getAll`);
  }

  getCandidatById(id:any){
    return this.http.get(`${environment.BASE_URL}/candidat/${id}`);
  }

  /*getCandidatByCompetance(competance:any){
    return this.http.get(`${environment.BASE_URL}/candidat/${competance}`);
  }*/

  createCandidat(candidat:any){
    return this.http.post(`${environment.BASE_URL}/candidat/create`, candidat);
  }

  updateCandidat(candidat:any,id:any){
    return this.http.put(`${environment.BASE_URL}/candidat/${id}`, candidat);
  }

  deleteCandidat(id:any) {
    return this.http.delete(`http://localhost:9190/v1/candidat/${id}`);
  }

}
