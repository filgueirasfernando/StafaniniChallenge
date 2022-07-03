import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from './Pessoa';

const httpOptions = { 
  headers: new HttpHeaders({
    'Content-Type' : 'appplication/json'
  })
}

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
    const apiUrl = '${this.url}/${pessoaId}';
    return this.http.get<Pessoa>(apiUrl);
  }

  SavePessoaAsync(pessoa: Pessoa) : Observable<any>{
    return this.http.post<Pessoa>(this.url, pessoa, httpOptions);
  }

  UpdatePessoaAsync(pessoa: Pessoa) : Observable<any>{
    return this.http.put<Pessoa>(this.url, pessoa, httpOptions);
  }

  DeletePessoaAsync(pessoaId: number) : Observable<any>{
    const apiUrl = '${this.url}/${pessoaId}';
    return this.http.delete<number>(apiUrl, httpOptions);
  }
}

