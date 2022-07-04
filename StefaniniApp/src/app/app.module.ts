import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PessoaService } from './pessoa.service';
import { CidadeService } from './cidade.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, FormArray, NgForm } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaComponent } from './components/pessoa/pessoa.component';
import { CidadeComponent } from './components/cidade/cidade.component';

@NgModule({
  declarations: [
    AppComponent,
    PessoaComponent,
    CidadeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule 
  ],
  providers: [HttpClientModule, PessoaService, CidadeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
