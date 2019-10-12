import { Component, OnInit } from '@angular/core';

import { ActivatedRoute,Router } from '@angular/router' 

@Component({
  selector: 'app-alquilar',
  templateUrl: './alquilar.component.html',
  styleUrls: ['./alquilar.component.css']
})
export class AlquilarComponent implements OnInit {

  constructor(private router:Router, private activedRoute:ActivatedRoute) { }

  ngOnInit() {
  }

  button1(event){
    event.preventDefault()
    const target = event.target
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value
    
    this.router.navigate(['/']);
  }

  button2(event){
    event.preventDefault()
    const target = event.target
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value
    
    this.router.navigate(['/menu']);
  }

  button3(event){
    event.preventDefault()
    const target = event.target
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value
    
    this.router.navigate(['/menu']);
  }

  buttonAtras(event){
    event.preventDefault()    
    this.router.navigate(['/menu']);
  }
}
