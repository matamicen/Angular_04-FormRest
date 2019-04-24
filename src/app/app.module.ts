import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

// Components
import { AppComponent } from './app.component';
import { TemplateComponent } from './components/template/template.component';

// Services
import { FormService } from './services/form.service';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
