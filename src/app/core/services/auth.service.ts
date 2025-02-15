import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { URLAPI } from '../../../environment/environment';
import { LoginRequest, LoginResponse } from '../models/auth/auth.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private httpClient: HttpClient = inject(HttpClient)

  login(usuario: LoginRequest) {
    return this.httpClient.post<LoginResponse>(`${URLAPI}Auth/login`, usuario, { observe: 'response' })
  }
}
