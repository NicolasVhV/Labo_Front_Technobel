import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  title = 'InscriptionRequests'

  baseURL: string = 'http://localhost:3000'


  constructor(private http : HttpClient) { }


createUser(users : {email: string, password: string, status: string, coopname: string }){
  this.http.post(this.baseURL, users )
}

  }

