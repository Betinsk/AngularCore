import { Component, OnInit } from '@angular/core';
import { VendasService } from '../vendas/vendas.service';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-venda-cadastro',
  templateUrl: './venda-cadastro.component.html',
  styleUrls: ['./venda-cadastro.component.css']
})
export class VendaCadastroComponent implements OnInit {

  venda = {};
  item = {};
  clientes: Array<any> =[]
  produtos: Array<any> = []

  constructor(private vendaService: VendasService) { }

  ngOnInit(): void {
    this.vendaService.listarClientes().subscribe(Response =>this.clientes = Response)
    

    this.vendaService.listarProdutos()
    .subscribe(response => this.produtos = response);

  }

}