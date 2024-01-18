import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private http: HttpClient) { }//Cuarta parte

  getAutos(){
    let url = environment.WA_PATH+ 'prub64verdugo/list';
    console.log(url);
    return this.http.get<any>(url);
  }
  
}
