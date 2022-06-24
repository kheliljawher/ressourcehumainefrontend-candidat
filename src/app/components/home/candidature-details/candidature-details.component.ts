import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatService } from 'src/app/services/candidat.service';
import { CandidatureService } from 'src/app/services/candidature.service';
import { LoginService } from 'src/app/services/login.service';
import { RegisterService } from 'src/app/services/register.service';


@Component({
  selector: 'app-candidature-details',
  templateUrl: './candidature-details.component.html',
  styleUrls: ['./candidature-details.component.css']
})
export class CandidatureDetailsComponent implements OnInit {
  candidature:any;
  idToDelete:any;
  id: any;
  formCandidat:FormGroup;
  formUpdateCandidature:FormGroup;
  formUpdateCandidat:FormGroup;
  selectedFileCv:  Array<File> = [];
  selectedFileLettreMotivation:  Array<File> = [];
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  imageName: any;
  submitted = false;
  test:boolean=false;
  id_candidature:string=this.activated.snapshot.params['id_candidature']
  testInterpolation:any="here variable from ts";
  loginCheck:boolean=false;
  formLogin:FormGroup;

  constructor(private candidaturesService:CandidatureService,
    private candidatsService:CandidatService,
    private router: Router,
    private formBuilder:FormBuilder,
    private activated:ActivatedRoute,
    private loginService:LoginService,
    private registerService:RegisterService

    ) { }

  ngOnInit(): void {
    this.formLogin=this.formBuilder.group({
      login:"",
      password:"",
      // cv:"",
      // lettreMotivation:""
    })
    

    if(localStorage.getItem('stateCandidat') == '1'){
      this.loginCheck = true;
    }

    // this.getCandidaturesById(this.id_candidature);
    this.candidature = JSON.parse(localStorage.getItem('id_candidature') || '')
    console.log("this is ",this.id_candidature);
    
    
    this.formCandidat = this.formBuilder.group({
      login:['',Validators.required],
      password:['',Validators.required]

    })
  }

  changeForm(){
    this.loginCheck=true;
  }

  // getCandidaturesById(id_candidature : any){
  //   this.candidaturesService.getCandidatureById(id_candidature).subscribe(
  //     (res:any) => {
  //       this.candidature = res
  //       console.log("candidature by id : ",this.candidature)}
  //   )
  // }

  // goToCandidatureList(){
  //   this.router.navigateByUrl('/home/candidature');
  // }

  saveCandidat(){
    if(this.formCandidat.invalid){
      this.submitted=true;

      console.log("invalid")
      console.log(this.formCandidat.value);
      return ;
    }
    let formData = new FormData();
    formData.append("login",this.formCandidat.value.login);
    formData.append("password",this.formCandidat.value.password);
    formData.append("fileCv", this.selectedFileCv[0]);
    formData.append("fileLettreMotivation", this.selectedFileLettreMotivation[0]);

    this.candidatsService.createCandidat(formData).subscribe( data =>{
      console.log(data);
      
    })
  }

  public onFileChangedCv(event:any) {
    //Select File
        console.log("formGroup : ",event.target)
    this.selectedFileCv = <Array<File>>event.target.files
    console.log('cv : ',this.selectedFileCv)
  }

  public onFileChangedLettreMotivation(event:any) {
    //Select File
//        console.log("formGroup : ",this.formEmploye.value)
    this.selectedFileLettreMotivation = <Array<File>>event.target.files
    console.log('lettre de motivation : ',this.selectedFileLettreMotivation)
  }

  // updateCandidature(){
  //   console.log("onSubmit")
  //   console.log(this.formUpdateCandidature.value);
  //   this.candidaturesService.updateCandidature(this.formUpdateCandidature.value,this.id).subscribe(
  //     (res:any) => {
  //       console.log("candidature",res);
  //       this.router.navigateByUrl("home/candidature")

  //     }
  //   )
  // }

  // geneFormUpdate(){
  //   this.formUpdateCandidature = this.formBuilder.group({
  //     id:"",
  //     login:"",
  //     password:""
  //   })
  // }

  // patchValue(id:any){
  //   console.log("emplyee id is : ",id)
  //   this.candidatsService.getCandidatById(id).subscribe(
  //     (res:any)=> {
  //       console.log("emplyee is :",res);

  //     this.formUpdateCandidat.patchValue({
  //     //id:res.id,
  //     login:res.login,
  //     password:res.password,
  //     cv:res.cv,
  //     lettreMotivation:res.lettreMotivation
  //   })

  //     }
  //   )
  //   this.test=true;
  // }

  sendIdToDelete(id:any){
    this.idToDelete=id;
    console.log("id to delete : ",id);
  }

  login(){
    console.log("this is the login",this.formLogin.value)
    
    this.loginService.login(this.formLogin.value).subscribe((res:any)=>{
      console.log("test connect", res)
      if(res != null && res?.role == 'CANDIDAT')
      {
        localStorage.setItem('stateCandidat','1');
        localStorage.setItem('user',JSON.stringify(res));
        console.log("user in local storage is like :",JSON.stringify(res)); 
        document.getElementById("closeModal").click();
      
      }else{
        //alert("else candidat not connected")  
        localStorage.setItem('user',JSON.stringify(res));

      }
    })
  }

}
