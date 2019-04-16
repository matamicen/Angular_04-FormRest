import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent implements OnInit {

  usuario:Object = {
    nombre : "Jose",
    apellido : "Meolans",
    email : ""

  }
  constructor() { }

  ngOnInit() {
  }

  guardar(forma:NgForm) {
      console.log("guardo los cambios");
      console.log("NgForm forma: ", forma);
      console.log("forma value: ", forma.value);
      console.log("usuario: ", this.usuario);
      
      

  }

}
