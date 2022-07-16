import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DemandeCandidatureService {

  token:string=localStorage.getItem('token');
  httpOptions = {
    headers:new HttpHeaders({
      'Authorization':`bearer `+this.token
    })
  };

  constructor(private http:HttpClient) { }

  getDemandeCandidature(){
    return this.http.get(`${environment.BASE_URL}/demandeCandidature/getAll`,this.httpOptions);
  }

  getDemandeCandidatureById(id:any){
    return this.http.get(`${environment.BASE_URL}/demandeCandidature/${id}`,this.httpOptions);
  }

  createDemandeCandidature(demandeCandidature:any,id_candidat:any,id_candidature:any){
    return this.http.post(`${environment.BASE_URL}/demandeCandidature/create/${id_candidat}/${id_candidature}`,demandeCandidature,this.httpOptions);
  }

  updateDemandeCandidature(demandeCandidature:any,id_demande_candidature:any, id_candidature:any, id_candidat:any){
    return this.http.put(`${environment.BASE_URL}/demandeCandidature/${id_demande_candidature}/${id_candidature}/${id_candidat}`,demandeCandidature,this.httpOptions);
  }

  deleteCandidature(id:any) {
    return this.http.delete(`${environment.BASE_URL}/demandeCandidature/${id}`,this.httpOptions);
  }

}
