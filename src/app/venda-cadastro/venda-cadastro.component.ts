import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { VendasService } from '../vendas/vendas.service';

@Component({
  selector: 'app-venda-cadastro',
  templateUrl: './venda-cadastro.component.html',
  styleUrls: ['./venda-cadastro.component.css']
})
export class VendaCadastroComponent implements OnInit {

  venda: any;
  item: any;
  clientes: Array<any> = [];
  produtos: Array<any> = [];
  @Output() vendaSalva = new EventEmitter();

  constructor(private vendaService: VendasService) { }

  ngOnInit() {
    this.vendaService.listarClientes()
      .subscribe(response => this.clientes = response);

    this.vendaService.listarProdutos()
      .subscribe(response => this.produtos = response);

    this.novaVenda();
  }

  novaVenda() {
    this.venda = { itens: [], frete: 0.0, total: 0.0 };
    this.item = {};
  }

  incluirItem() {
    this.item.total = (this.item.valor * this.item.quantidade);

    this.venda.itens.push(this.item);

    this.item = {};

    this.calcularTotal();
  }

  calcularTotal() {
    console.log(this.venda)
    const totalItens = this.venda.itens
      .map((i: any) => (i.valor * i.quantidade))
      .reduce((total:any, v:any) => total + v, 0);
    this.venda.total = totalItens + this.venda.frete;
  }
  
  adicionar(frm: any ) {
    console.log(frm)
    console.log(this.venda)
    let itens = <any>[]
    this.venda.itens.forEach((e:any) => {
      let item = {
        valor: e.valor,
        id_produto: e.id_produto,
        quantidade: Number(e.quantidade)
      }

      itens.push(item)
      
    });
    let venda = {
        id_cliente: this.venda.cliente.id_cliente,
        frete: this.venda.frete,
        total: this.venda.total,
        itens: itens
    }
    
     this.vendaService.adicionar(venda).subscribe(response => {
       frm.reset();
       response.itens = this.venda.itens
      this.novaVenda();

    this.vendaSalva.emit(response);
    });
  }

}