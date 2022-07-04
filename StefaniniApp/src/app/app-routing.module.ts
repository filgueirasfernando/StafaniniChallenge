import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CidadeComponent } from './components/cidade/cidade.component';
import { PessoaComponent } from './components/pessoa/pessoa.component';

const routes: Routes = [
  {path: 'pessoa', component: PessoaComponent},
  {path: 'cidade', component: CidadeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
