import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accesos',
  templateUrl: './accesos.component.html',
  styleUrls: ['./accesos.component.css']
})
export class AccesosComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  Acceder(): void {
    this.router.navigate(['/agregarUsuario']);
  }
}
