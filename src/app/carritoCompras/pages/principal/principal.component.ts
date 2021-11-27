import { Component, OnInit } from '@angular/core';
import { Carrito } from '../../carritoInterface';
import { ServicesService } from '../../services.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent  {

   imagenes : Carrito [] = [];

  constructor(private servicio : ServicesService) { 
    this.imagenes =this.servicio.imagenesArreglo;
  }


  
  enviar(elementos : Carrito ){
  
    this.servicio.getMouse(elementos);

  }


}
