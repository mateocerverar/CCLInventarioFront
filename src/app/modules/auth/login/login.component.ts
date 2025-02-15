import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginRequest } from '../../../core/models/auth/auth.interfaces';
import { AuthService } from '../../../core/services/auth.service';
import { MessageService } from 'primeng/api';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private authService: AuthService = inject(AuthService)
  private messageService: MessageService = inject(MessageService)
  private router: Router = inject(Router)

  form: FormGroup = new FormGroup<LoginRequest>({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  })

  login() {
    this.authService.login(this.form.value).subscribe({
      next: (v => {
        localStorage.setItem('token', v.body?.token as string)
        this.messageService.add({ severity: 'success', detail: 'Login realizado exitosamente' })
        this.router.navigate(['inventario'])
      }),
      error: ((e: HttpErrorResponse) => {
        console.log('e: ', e);
        this.messageService.add({ severity: 'error', detail: e.error })
      })
    })
  }
}
