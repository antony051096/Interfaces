import { Component, OnInit } from '@angular/core';

import { ActivatedRoute,Router } from '@angular/router' 
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private router:Router, private activedRoute:ActivatedRoute) { }
  banderaMenu = true;

  ngOnInit() {
    
  }

  ifIsMenu(){
    return false;
  }

  loginUser(event){
    event.preventDefault()
    const target = event.target
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value
    
    this.router.navigate(['/menu']);
  }
}
