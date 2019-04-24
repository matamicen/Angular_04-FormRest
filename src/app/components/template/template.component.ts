import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormService } from '../../services/form.service';

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
    name : null,
    phone : null,
    email : null

  }

  
  constructor(private _formservice:FormService) { }

  ngOnInit() {
  }

  guardar(forma:NgForm) {
      console.log("guardo los cambios");
      console.log("NgForm forma: ", forma);
      console.log("forma value: ", forma.value);
      console.log("usuario: ", this.usuario);

     this._formservice.altaUsuario(this.usuario)
        .subscribe(data => console.log(data),
        error => {
          console.log("fallo el call de la API");
          
          console.log(error)
        });
      
      

  }

}
