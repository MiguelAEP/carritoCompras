import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Carrito } from './carritoInterface';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }

 // envioObjeto$: BehaviorSubject<number> = new BehaviorSubject(0);

   nuevosDatosCarrito : Carrito []=[]
  imagenes : Carrito [] = [
    {
      nombre : 'mouse1',
      imagen : 'assets/img/mouse1.jpg',
      precio :  120
    },
    {
      nombre : 'mouse2',
      imagen : 'assets/img/mouse2.jpg',
      precio :  120
    },
    {
      nombre : 'mouse3',
      imagen : 'assets/img/mouse3.jpg',
      precio :  155
    },
    {
      nombre : 'mouse4',
      imagen : 'assets/img/mouse4.jpg',
      precio :  110
    },
    {
      nombre : 'mouse5',
      imagen : 'assets/img/mouse5.jpg',
      precio :  135
    },
    {
      nombre : 'mouse6',
      imagen : 'assets/img/mouse6.jpg',
      precio :  150
    },
    {
      nombre : 'mouse7',
      imagen : 'assets/img/mouse7.jpg',
      precio :  50
    },
    {
      nombre : 'mouse8',
      imagen : 'assets/img/mouse8.jpg',
      precio :  100
    },
  ];

  get imagenesArreglo(){
    return this.imagenes;
  }



  getMouse( carrito : Carrito ){
    
      const item = this.nuevosDatosCarrito.find( carritoC =>{
        return carritoC.nombre === carrito.nombre
      })

      if( item !== undefined){
       
        item.cantidad!++; 
        item.precio += carrito.precio;
      }
      else{
        // si es undefined no existe
       const carritoCant : Carrito ={
         cantidad :1, 
         nombre : carrito.nombre,
         imagen :carrito.imagen,
         precio : carrito.precio,
         precioInicial:carrito.precio
       }
       
        this.nuevosDatosCarrito.push(carritoCant)
      }
    
  }

  get arregloAside(){
    return this.nuevosDatosCarrito;
  }

  eliminarProducto(carrito : Carrito , index : number){

    const precioInicial = this.nuevosDatosCarrito[index].precioInicial;

    this.nuevosDatosCarrito[index].precio-=precioInicial!;
    carrito.cantidad!--;

    console.log(carrito)
    if(carrito.cantidad! ===0 && this.nuevosDatosCarrito[index].precio===0){
      this.nuevosDatosCarrito.splice(index,1)
    }

  }

}
