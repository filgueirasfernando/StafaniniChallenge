import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Cidade } from './Cidade';


@Injectable({
  providedIn: 'root'
})
export class CidadeService {
  url = 'https://localhost:7269/api/cidade';

  constructor(private http: HttpClient) { }

  GetUFAsync() : Observable<Cidade[]> {
    return this.http.get<Cidade[]>(this.url);
  }

  GetCidadesAsync() : Observable<Cidade[]> {
    return this.http.get<Cidade[]>(this.url);
  }

  GetCidadesByIdAsync(cidadeId: number) : Observable<Cidade> {
    const apiUrl = `${this.url}/${cidadeId}`;
    return this.http.get<Cidade>(apiUrl);
  }

  SaveCidadeAsync(cidade: Cidade) : Observable<any>{
    return this.http.post<Cidade>(this.url, cidade);
  }

  UpdateCidadeAsync(cidade: Cidade) : Observable<any>{
    return this.http.put<Cidade>(this.url, cidade);
  }

  DeleteCidadeAsync(cidadeId: number) : Observable<any>{
    let params = new HttpParams().set('cidadeId', cidadeId);
    let options = { params: params };

    return this.http.delete<number>(this.url, options);
  }

}
