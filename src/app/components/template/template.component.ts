import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
        .ng-invalid.ng-touched:not(form) { 
          border: 1px solid red;
        }
        `]
})
export class TemplateComponent implements OnInit {

  usuario:Object = {
    nombre : null,
    telefono : null,
    email : null

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
