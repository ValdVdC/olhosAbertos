import { Component, OnInit } from '@angular/core';
import { ApiService } from './servicos/api.service';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  // title = 'client';
  // message: any;
  politicos:any = []
  politicosGeral:any = []
  politicosFiltrados:any = []
  pagina: number = 0;
  constructor (private api: ApiService, private http: HttpClient){}
 async ngOnInit(){
  this.politicosGeral = []
  this.carregar()
 }
async carregar(){
   this.politicos=[]
   const data: any = await lastValueFrom(this.http.get(`http://localhost:3000/politico`))
   const inicio = 9*this.pagina
   const fim = inicio+9
   for (let i = inicio; i <fim; i++) {
   this.politicos.push({
     nome:data[i].nome,
     foto:`https://e-processo.recife.pe.leg.br/sapl_documentos/parlamentar/fotos/${data[i].id}_foto_parlamentar`,
     partido:data[i].partido
    })
  }
   this.politicosGeral = data
   console.log(data)

 }
 async proximo(){
  if (this.pagina < 4) {
    this.pagina++;
    await this.carregar()
  }
 }
 async anterior(){
  if (this.pagina > 0) {
    this.pagina--;
    await this.carregar()
  }
 }
 async primeiro(){
  this.pagina = 0
  await this.carregar()
 }
 async ultimo(){
  this.pagina = 4
  await this.carregar()
 }
 async buscar(obj:any){
  const query = obj.target.value.toLowerCase();
  if(query){
    this.politicos = this.politicosGeral.filter((politico:any)=>
      politico.nome.toLowerCase().includes(query)
    )
    .map((politico: any) => ({
      ...politico, // Copia os dados do político
      foto: `https://e-processo.recife.pe.leg.br/sapl_documentos/parlamentar/fotos/${politico.id}_foto_parlamentar`
    }))
    .slice(0, 9);
  }else{
    await this.carregar();
  }
 }
}