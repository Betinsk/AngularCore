import { Component, OnInit } from '@angular/core';

import { VendasService } from '../vendas/vendas.service';

@Component({
  selector: 'app-produtos-listagem',
  templateUrl: './produtos-listagem.component.html',
  styleUrls: ['./produtos-listagem.component.css']
})
export class produtosListagemComponent implements OnInit {

  produtos: Array<any> = [];



  constructor(private vendaService: VendasService) { }



  ngOnInit(): void {
    this.vendaService.listarProdutos().subscribe(Response =>this.produtos = Response)
  }
  listarProdutos() {
    this.vendaService.listar()
      .subscribe(response => this.produtos = response);
  }


}