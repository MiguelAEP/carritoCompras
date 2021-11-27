import { Component, OnInit } from '@angular/core';
import { Carrito } from '../../carritoInterface';
import { ServicesService } from '../../services.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  guardaCarrito : Carrito [ ] = [];
  prueba : Carrito [ ] = [];
  constructor(private servicio : ServicesService) { }

  ngOnInit(): void {
    this.guardaCarrito = this.servicio.nuevosDatosCarrito;
    console.log(this.guardaCarrito)
  }


  abierto : boolean = false;
  open(){
    this.abierto =!this.abierto
  }

  eliminar(carrito : Carrito , index : number){
      this.servicio.eliminarProducto(carrito , index)
  }

}
