import { Component, OnInit } from '@angular/core';
import { VendasService } from '../vendas/vendas.service';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.css']
})
export class VendaComponent implements OnInit {
  
  vendas: any;
  item: any;
  clientes: Array<any> = [];
  produtos: Array<any> = [];

  constructor(private vendaService: VendasService) { }

  ngOnInit(): void {
    this.listar()
    this.listarClientes()
  }
    listar() {
      this.vendaService.listar().subscribe(response => this.vendas = response )
    }

    
  listarClientes() {
    this.vendaService.listarClientes()
      .subscribe(response => this.clientes = response);
  }

}
