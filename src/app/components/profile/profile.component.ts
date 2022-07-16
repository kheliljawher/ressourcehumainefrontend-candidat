import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CandidatService } from 'src/app/services/candidat.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  candidats:any;
  idToDelete:any;
  id: any;
  formCandidat:FormGroup;
  formUpdateCandidat:FormGroup;
  selectedFile:  Array<File> = [];
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  imageName: any;
  submitted = false;
  test:boolean=false;

  constructor(private candidatsService:CandidatService,
    private router: Router,
    private formBuilder:FormBuilder) { }

  ngOnInit(): void {

    this.getCandidats();

    this.formCandidat = this.formBuilder.group({
      nom:['',Validators.required],
      prenom:['',Validators.required],
      login:['',Validators.required],
      password:['',Validators.required],
      cin:['',Validators.required],
      telephone:['',Validators.required],
      email:['',Validators.required],
      adresse:['',Validators.required],
      date_Naissance:['',Validators.required],
      sex:['',Validators.required],
      confirmPassword:['',Validators.required],
      image:['',Validators.required]
    })

  }

  getCandidats(){
    this.candidatsService.getCandidats().subscribe(
      (res:any) => {
        this.candidats = res
        console.log("candidats : ",this.candidats)}
    )
  }



}
