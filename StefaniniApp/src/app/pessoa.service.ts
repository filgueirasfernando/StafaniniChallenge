import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from './Pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
url = 'https://localhost:7269/api/pessoa';

  constructor(private http: HttpClient) { }

  GetPessoasAsync() : Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.url);
  }

  GetPessoasByIdAsync(pessoaId: number) : Observable<Pessoa> {
    const apiUrl = `${this.url}/${pessoaId}`;
    return this.http.get<Pessoa>(apiUrl);
  }

  SavePessoaAsync(pessoa: Pessoa) : Observable<any>{
    return this.http.post<Pessoa>(this.url, pessoa);
  }

  UpdatePessoaAsync(pessoa: Pessoa) : Observable<any>{
    return this.http.put<Pessoa>(this.url, pessoa);
  }

  DeletePessoaAsync(pessoaId: number) : Observable<any>{
    let params = new HttpParams().set('pessoaId', pessoaId);
    let options = { params: params };

    return this.http.delete<number>(this.url, options);
  }
  }

