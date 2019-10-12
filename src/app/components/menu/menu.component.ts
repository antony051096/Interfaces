import { Component, OnInit } from '@angular/core';

import { ActivatedRoute,Router } from '@angular/router' 

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(private router:Router, private activedRoute:ActivatedRoute) { }

  ngOnInit() {
  }

  ifIsMenu(){
    return true;
  }

  button1(event){
    event.preventDefault()
    const target = event.target
    this.router.navigate(['/recargar']);
  }

  button2(event){
    event.preventDefault()
    const target = event.target
    this.router.navigate(['/alquilar']);
  }

  button3(event){
    event.preventDefault()
    const target = event.target
    
    this.router.navigate(['/devolver']);
  }
}
