import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProdutoCarrinho } from '../produtos';
import { CarrinhoService } from '../services/carrinho.service';
import { NotificacaoService } from '../services/notificacao.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  itensCarrinho:IProdutoCarrinho[] = [];
  total = 0;

  constructor(
    public carrinhoService:CarrinhoService,
    private router:Router,
    private notificacaoService:NotificacaoService
  ) { }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obterCarrinho();
    this.calcularTotal();
  }

  calcularTotal(){
    this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade), 0);
  }

  removerProdutoCarrinho(produtoId: number){
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    this.calcularTotal();
    this.carrinhoService.removerProdutoCarrinho(produtoId);
  }

  comprar(){
    this.notificacaoService.notificar("Parabens,  você finalizou sua compra!");
    setTimeout(()=>{
      this.carrinhoService.limparCarrinho();
      this.router.navigate(["produtos"]);
    },3000);
  }

}
