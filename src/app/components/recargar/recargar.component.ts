import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router' 

@Component({
  selector: 'app-recargar',
  templateUrl: './recargar.component.html',
  styleUrls: ['./recargar.component.css']
})
export class RecargarComponent implements OnInit {
  constructor(private router:Router, private activedRoute:ActivatedRoute) { }

  ngOnInit() {
  }

  button(event){
    event.preventDefault()
    const target = event.target
    this.router.navigate(['/menu']);
  }

}
