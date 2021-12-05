import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

  heroeBorrado:string="";
  heroes:string[] = ["Spiderman","Iroman","Hulk","Thor","Capitan America"];
 
  borrarHeroe(){
    console.log("borrando");
    //normalmente da error porque shift puede retornar un string o undefined
    this.heroeBorrado = this.heroes.shift() || ""; // this.heroes.pop();
   
  }
}
