import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { fromEvent } from 'rxjs';

@Component({
  imports: [RouterModule, NgIf, FormsModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-angular-app';

  email = '';
  password = '';
  mensagem = '';

  constructor() {
    fromEvent(document, 'click').subscribe(res => console.log(res));
  }

  login(event: Event) {
    event.preventDefault(); // Previne recarregamento da página
  
    if (!this.email || !this.password) {
      this.mensagem = 'Todos os campos são obrigatórios.';
      return;
    }
  
    if (this.email === 'teste@teste.com' && this.password === '123456') {
      this.mensagem = 'Login bem-sucedido!';
    } else {
      this.mensagem = 'Credenciais inválidas.';
    }
  }
  
}
