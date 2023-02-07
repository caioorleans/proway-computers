import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NotificacaoService } from '../services/notificacao.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  formContato = this.fb.group({
    nome: ["", [
      Validators.minLength(4),
      Validators.required
    ]],
    assunto: [[""],[
      Validators.minLength(4),
      Validators.required
    ]],
    telefone: [[""],[
      Validators.minLength(11),
      Validators.required
    ]],
    email: [[""],[
      Validators.email,
      Validators.required
    ]],
    mensagem: [[""],[
      Validators.minLength(20),
      Validators.required
    ]],
  })

  constructor(
    private fb:FormBuilder,
    private notificacao:NotificacaoService
    ) { }

  ngOnInit(): void {
  }

  enviarFormulario(){
    this.notificacao.notificar("Sua mensagem foi enviada");
    setTimeout(()=>{
      this.formContato.reset();
    },3000)
  }
}
