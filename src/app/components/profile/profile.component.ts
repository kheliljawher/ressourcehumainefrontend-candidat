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

  saveCandidat() {

    if (this.formCandidat.invalid) {
      this.submitted = true;
      console.log("invalid")
      console.table(this.formCandidat.value);
      //return ;
    }

    console.log("role is : ", this.formCandidat.value.role);

    console.log('form is', this.formCandidat.value);

    let formData = new FormData();
    formData.append("nom", this.formCandidat.value.nom);
    formData.append("prenom", this.formCandidat.value.prenom);
    formData.append("login", this.formCandidat.value.login);
    formData.append("password", this.formCandidat.value.password);
    formData.append("cin", this.formCandidat.value.cin);
    formData.append("telephone", this.formCandidat.value.telephone);
    formData.append("email", this.formCandidat.value.email);
    formData.append("adresse", this.formCandidat.value.adresse);
    formData.append("poste", this.formCandidat.value.poste);
    formData.append("date_Embauche", this.formCandidat.value.date_Embauche);
    formData.append("date_Naissance", this.formCandidat.value.date_Naissance);
    formData.append("file", this.selectedFile[0]);
    formData.append("role", this.formCandidat.value.role);
    formData.append("sexs", this.formCandidat.value.sexs);
    formData.append("confirmPassword", this.formCandidat.value.confirmPassword);

    console.log("formulaire", this.formCandidat.value)

    //document.getElementById("add_emp_close").click();

  }

}
