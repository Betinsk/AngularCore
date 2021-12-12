import { Component, OnInit } from '@angular/core';
import { VendasService } from '../vendas/vendas.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produtos: Array<any> = [];

  constructor(private vendaService: VendasService) { }

  ngOnInit(): void {
    this.listarProdutos();
  }
  
  listarProdutos(){
    this.vendaService.listarProdutos().subscribe(response => this.produtos = response)
  }

}
