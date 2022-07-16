import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  
  logout(){
    console.log("here logout");
    
    localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
        localStorage.removeItem('stateCandidat');
        localStorage.removeItem('candidat')

  }

}
