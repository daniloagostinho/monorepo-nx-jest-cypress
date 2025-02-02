import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

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

  login() {
    if (this.email === 'teste@teste.com' && this.password === '123456') {
      this.mensagem = 'Login bem-sucedido!';
    } else {
      this.mensagem = 'Credenciais inválidas.';
    }
  }
}
