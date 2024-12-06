import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  private politicos = new BehaviorSubject<any[]>([])
  getPoliticos = this.politicos.asObservable();
  async getPolitico():Promise<void>{
    console.log('oi')
    let novosPoliticos = []
    for (let i = 0; i < 9; i++) {
      
    
    const data: any = await lastValueFrom(this.http.get(`http://localhost:3000/politico`))
    // console.log(data)
    novosPoliticos.push({
      nome:data[i].nome,
      foto:data[i].url,
      partido:data[i].partido
    })
    }
    this.politicos.next(novosPoliticos)
    console.log(novosPoliticos)
    console.log(this.politicos)
  }
}
